/**
 * xp.ts — Pure functions for the Mastery XP system.
 *
 * DESIGN PHILOSOPHY:
 * We want points that reward *real learning*, not mindless repetition.
 * The scoring deliberately makes "cover new ground across topics" the
 * highest-XP strategy, while still giving something for review/retention.
 *
 * POINT STRUCTURE:
 *   first_correct  →  5 base pts  (biggest reward: you learned something new)
 *   recovery       →  3 base pts  (you fixed a knowledge gap — great!)
 *   repeat_correct →  2 base pts  (retention matters, but diminishing return)
 *   wrong          →  0 base pts  (no penalty, no reward)
 *
 * MULTIPLIERS (stacked via multiplication):
 *   Streak:  1.0 + 0.1 per consecutive streak day, capped at 1.5×
 *            → Rewards daily consistency, but cap prevents it from dominating.
 *   Breadth: 1.25× if you've practiced 3+ distinct topics today
 *            → Rewards exploring multiple topics instead of tunneling into one.
 *
 * LEADERBOARD NOTES:
 * Because multipliers depend on session state (streak length, topics practiced
 * today), we can't recompute them retroactively. That's why we store the final
 * `points` in xp_log at the time of answering. For a leaderboard, just
 * SUM(points) per user — no reprocessing needed.
 *
 * FUTURE SELF / FUTURE DEVS:
 * - If you add new event types, update XpEventType in db.ts and BASE_POINTS here.
 * - If you change point values, old xp_log rows keep their original points.
 *   This is intentional — it's a ledger, not a formula to re-evaluate.
 * - The multiplier logic lives in computeMultiplier() and is tested independently
 *   from the event classification. Keep them separate.
 */

import { Attempt, XpEventType } from "./db";

// ─── Base Point Values ───────────────────────────────────────────────
// These map 1-to-1 with XpEventType. If you add a new event type,
// add its base points here too.

const BASE_POINTS: Record<XpEventType, number> = {
  first_correct: 5,   // Never got this question right before → big reward
  recovery: 3,        // Previously wrong, now correct → solid reward
  repeat_correct: 2,  // Already answered correctly before → small reward
  wrong: 0,           // No points, but we still log the event
};

// ─── Multiplier Constants ────────────────────────────────────────────

/** How much each consecutive streak day adds to the multiplier. */
const STREAK_BONUS_PER_DAY = 0.1;

/** Maximum streak multiplier (prevents streaks from dominating). */
const STREAK_MULTIPLIER_CAP = 1.5;

/** How many distinct topics you need today to trigger the breadth bonus. */
const BREADTH_TOPIC_THRESHOLD = 3;

/** The breadth multiplier when the threshold is met. */
const BREADTH_MULTIPLIER = 1.25;

// ─── Event Classification ────────────────────────────────────────────

/**
 * Classify an attempt into an XP event type based on the question's
 * prior attempt history.
 *
 * Logic:
 *   - If the answer is wrong → "wrong" (always, regardless of history)
 *   - If correct and NO prior attempts → "first_correct"
 *   - If correct and has prior attempts:
 *       - If user never got it right before → "recovery" (fixing a gap)
 *       - If user got it right before → "repeat_correct" (retention)
 *
 * @param correct    - Whether the current attempt is correct
 * @param priorAttempts - All previous attempts for this question (empty if first time)
 */
export function classifyAttempt(
  correct: boolean,
  priorAttempts: Attempt[]
): XpEventType {
  // Wrong answers are always "wrong", no matter what
  if (!correct) return "wrong";

  // First time seeing this question and got it right
  if (priorAttempts.length === 0) return "first_correct";

  // Has prior attempts — check if any were correct
  const hasEverBeenCorrect = priorAttempts.some((a) => a.correct);

  // Got it right before → this is just retention review
  if (hasEverBeenCorrect) return "repeat_correct";

  // Never got it right before, but got it right now → recovery!
  return "recovery";
}

// ─── Multiplier Calculation ──────────────────────────────────────────

/**
 * Compute the combined XP multiplier based on current session context.
 *
 * Two independent multipliers are multiplied together:
 *   1. Streak multiplier: rewards daily consistency
 *   2. Breadth multiplier: rewards practicing across topics
 *
 * Example:
 *   - 5-day streak + 3 topics today = 1.5 (streak) × 1.25 (breadth) = 1.875×
 *   - 0-day streak + 1 topic today  = 1.0 (streak) × 1.0 (breadth)  = 1.0×
 *
 * @param currentStreak      - Number of consecutive days practiced (from streak_log)
 * @param distinctTopicsToday - How many unique topics the user has practiced today
 */
export function computeMultiplier(
  currentStreak: number,
  distinctTopicsToday: number
): number {
  // Streak: 1.0 base + 0.1 per day, capped at 2.0
  // A 10-day streak hits the cap. Anything beyond doesn't add more.
  const streakMultiplier = Math.min(
    1.0 + currentStreak * STREAK_BONUS_PER_DAY,
    STREAK_MULTIPLIER_CAP
  );

  // Breadth: 1.5× if 3+ topics practiced today, otherwise 1.0×
  // This is a step function, not gradual — keeps it simple and clear.
  const breadthMultiplier =
    distinctTopicsToday >= BREADTH_TOPIC_THRESHOLD ? BREADTH_MULTIPLIER : 1.0;

  return streakMultiplier * breadthMultiplier;
}

// ─── Full XP Calculation ─────────────────────────────────────────────

/**
 * Calculate the XP earned for a single attempt.
 *
 * This is the main entry point. It:
 *   1. Classifies the attempt (what kind of answer was this?)
 *   2. Looks up the base points for that classification
 *   3. Computes the multiplier from session context
 *   4. Returns everything needed to write an xp_log row
 *
 * @param correct             - Whether the answer was correct
 * @param priorAttempts       - Previous attempts on this question
 * @param currentStreak       - Consecutive day streak count
 * @param distinctTopicsToday - Unique topics practiced today
 */
export function calculateXp(
  correct: boolean,
  priorAttempts: Attempt[],
  currentStreak: number,
  distinctTopicsToday: number
): { eventType: XpEventType; basePoints: number; multiplier: number; points: number } {
  const eventType = classifyAttempt(correct, priorAttempts);
  const basePoints = BASE_POINTS[eventType];
  const multiplier = computeMultiplier(currentStreak, distinctTopicsToday);

  // Final points: base × multiplier, rounded down to keep it clean.
  // We floor instead of round to avoid inflating points on edge cases.
  const points = Math.floor(basePoints * multiplier);

  return { eventType, basePoints, multiplier, points };
}
