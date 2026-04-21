import { Dexie, type EntityTable } from "dexie";
import { ExamSession } from "@/components/config";
import { Question } from "@/data/questions";

export type AppDB = Dexie & {
  exam_sessions: EntityTable<ExamSession, "id">;
  questions: EntityTable<Question, "id">;
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
