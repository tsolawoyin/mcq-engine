import { Dexie, type EntityTable } from "dexie";
import { ExamSession } from "@/components/config";
import { Question } from "@/data/questions";
import { Subject } from "@/data/subjects";
import { Topic } from "@/data/topics";

export interface Attempt {
  timestamp: number; // Date.now()
  correct: boolean;
}

export interface QuestionStat {
  questionId: string;
  subjectId: string;
  topicId: string;
  attempts: Attempt[];
}

export interface Meta {
  key: string;
  value: string;
}

export interface StreakLog {
  date: string; // YYYY-MM-DD, primary key
  questionsAnswered: number;
  questionsCorrect: number;
}

/**
 * XpLog — one row per XP-earning event.
 *
 * Each time a user answers a question, we classify the attempt
 * (first correct, recovery, repeat correct, or wrong) and award
 * points accordingly. This table is an append-only ledger so we can:
 *   1. Show a running total instantly (sum all `points`).
 *   2. Break down XP by day, topic, or event type for UI.
 *   3. Sync to a server later for leaderboards without reprocessing.
 *
 * Why a separate table instead of deriving from question_stats?
 *   - Multipliers (streak, breadth) depend on session state at the
 *     time of answering. We can't reconstruct those retroactively.
 *   - A ledger is leaderboard-ready: just SUM(points) per user.
 */
export interface XpLog {
  id?: number;             // Auto-incremented primary key
  timestamp: number;       // Date.now() when the XP was earned
  questionId: string;      // Which question triggered this XP
  topicId: string;         // Topic of the question (for per-topic XP breakdowns)
  eventType: XpEventType;  // Classification of the attempt (see XpEventType)
  basePoints: number;      // Points before multipliers (10, 5, or 2)
  multiplier: number;      // Combined multiplier at the time (streak × breadth)
  points: number;          // Final XP awarded = basePoints × multiplier
}

/**
 * XpEventType — how we classify each answer for point-awarding.
 *
 * "first_correct"  → First time getting this question right.  (5 base pts)
 * "recovery"       → Got it right after previously getting it wrong. (3 base pts)
 * "repeat_correct" → Got it right again (already answered correctly before). (2 base pts)
 * "wrong"          → Incorrect answer. No points, but still logged for completeness.
 */
export type XpEventType = "first_correct" | "recovery" | "repeat_correct" | "wrong";

export type AppDB = Dexie & {
  exam_sessions: EntityTable<ExamSession, "id">;
  questions: EntityTable<Question, "id">;
  question_stats: EntityTable<QuestionStat, "questionId">;
  subjects: EntityTable<Subject, "id">;
  topics: EntityTable<Topic, "id">;
  meta: EntityTable<Meta, "key">;
  streak_log: EntityTable<StreakLog, "date">;
  xp_log: EntityTable<XpLog, "id">;
}
// Typescript
export const db = new Dexie("dac") as AppDB;

// Ok... Let's go
db.version(2).stores({
  exam_sessions: "id, createdAt",
  questions: "id"
});

// v3: Exam gets its own id, ExamSession gets currentExam
db.version(3).stores({
  exam_sessions: "id, createdAt",
  questions: "id"
});

// v4: Add question_stats for mastery tracking
db.version(4).stores({
  exam_sessions: "id, createdAt",
  questions: "id",
  question_stats: "questionId, subjectId, topicId"
});

// v5: Add subjects and topics tables for offline-first data
db.version(5).stores({
  exam_sessions: "id, createdAt",
  questions: "id, subject, topic",
  question_stats: "questionId, subjectId, topicId",
  subjects: "id",
  topics: "id, subject"
});

// v6: Add meta table for tracking source data version
db.version(6).stores({
  exam_sessions: "id, createdAt",
  questions: "id, subject, topic",
  question_stats: "questionId, subjectId, topicId",
  subjects: "id",
  topics: "id, subject",
  meta: "key"
});

// v7: Add order index to subjects and topics for sorting
db.version(7).stores({
  exam_sessions: "id, createdAt",
  questions: "id, subject, topic",
  question_stats: "questionId, subjectId, topicId",
  subjects: "id, order",
  topics: "id, subject, order",
  meta: "key"
});

// v8: Migrate exam.topic → exam.topics (array) for multi-topic selection
db.version(8).stores({
  exam_sessions: "id, createdAt",
  questions: "id, subject, topic",
  question_stats: "questionId, subjectId, topicId",
  subjects: "id, order",
  topics: "id, subject, order",
  meta: "key"
}).upgrade(async (tx) => {
  await tx.table("exam_sessions").toCollection().modify((session: any) => {
    for (const exam of session.exams) {
      if (exam.topic && !exam.topics) {
        exam.topics = [exam.topic];
        delete exam.topic;
      }
    }
  });
});

// v9: Add streak_log table for daily activity tracking
db.version(9).stores({
  exam_sessions: "id, createdAt",
  questions: "id, subject, topic",
  question_stats: "questionId, subjectId, topicId",
  subjects: "id, order",
  topics: "id, subject, order",
  meta: "key",
  streak_log: "date",
});

// v10: Add xp_log table for mastery XP point tracking.
// The ++id means auto-increment. Indexed by timestamp (for date range queries)
// and topicId (for per-topic XP breakdowns).
db.version(10).stores({
  exam_sessions: "id, createdAt",
  questions: "id, subject, topic",
  question_stats: "questionId, subjectId, topicId",
  subjects: "id, order",
  topics: "id, subject, order",
  meta: "key",
  streak_log: "date",
  xp_log: "++id, timestamp, topicId",
});
