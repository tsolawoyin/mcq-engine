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

export type AppDB = Dexie & {
  exam_sessions: EntityTable<ExamSession, "id">;
  questions: EntityTable<Question, "id">;
  question_stats: EntityTable<QuestionStat, "questionId">;
  subjects: EntityTable<Subject, "id">;
  topics: EntityTable<Topic, "id">;
  meta: EntityTable<Meta, "key">;
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
