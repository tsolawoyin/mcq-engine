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
db.version(1).stores({
  exam_sessions: "id", // this is just for indexing I suppose
  questions: "id"
});
