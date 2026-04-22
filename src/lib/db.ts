import { Dexie, type EntityTable } from "dexie";
import { ExamSession } from "@/components/config";
import { Question } from "@/data/questions";

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

export type AppDB = Dexie & {
  exam_sessions: EntityTable<ExamSession, "id">;
  questions: EntityTable<Question, "id">;
  question_stats: EntityTable<QuestionStat, "questionId">;
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
