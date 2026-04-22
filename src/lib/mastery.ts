import { Attempt, QuestionStat } from "./db";

const HALF_LIFE_DAYS = 7;
const LAMBDA = Math.LN2 / HALF_LIFE_DAYS;
const MS_PER_DAY = 86_400_000;

/** Exponential decay weight: 1.0 for now, 0.5 after 7 days, 0.25 after 14, etc. */
export function decayWeight(timestamp: number, now: number): number {
  const daysSince = (now - timestamp) / MS_PER_DAY;
  return Math.exp(-LAMBDA * Math.max(daysSince, 0));
}

/** Weighted mastery score for a single question's attempts. Returns null if no attempts. */
export function questionMastery(
  attempts: Attempt[],
  now: number
): number | null {
  if (attempts.length === 0) return null;

  let weightedCorrect = 0;
  let totalWeight = 0;

  for (const a of attempts) {
    const w = decayWeight(a.timestamp, now);
    if (a.correct) weightedCorrect += w;
    totalWeight += w;
  }

  return totalWeight === 0 ? 0 : weightedCorrect / totalWeight;
}

/** Average mastery across all questions for a topic. Unattempted questions count as 0%. */
export function topicMastery(
  stats: QuestionStat[],
  totalQuestions: number,
  now: number
): number | null {
  if (totalQuestions === 0) return null;

  let sum = 0;

  for (const s of stats) {
    const m = questionMastery(s.attempts, now);
    if (m !== null) sum += m;
  }

  return sum / totalQuestions;
}
