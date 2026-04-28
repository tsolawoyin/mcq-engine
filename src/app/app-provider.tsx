"use client";

import { subjects as defaultSubjects } from "@/data/subjects";
import { topics as defaultTopics } from "@/data/topics";
import { questions as defaultQuestions } from "@/data/questions";
import { DATA_VERSION } from "@/data/version";

import { createContext, useContext, useEffect, useState } from "react";
import { Subject } from "@/data/subjects";
import { Topic } from "@/data/topics";
import { Question } from "@/data/questions";
import { db, AppDB } from "@/lib/db";
import { syncStats } from "@/lib/sync-stats";

interface App {
  subjects: Subject[];
  topics: Topic[];
  questions: Question[];
  db: AppDB;
}

export const AppContext = createContext<App | null>(null);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function loadData() {
      const storedVersion = await db.meta.get("dataVersion");
      const needsReseed = storedVersion?.value !== DATA_VERSION;

      if (needsReseed) {
        // Source data changed — clear and re-seed content tables so the DB
        // is always an exact mirror of the static data files.
        // (bulkPut alone never removes rows deleted from source.)
        await Promise.all([
          db.subjects.clear(),
          db.topics.clear(),
          db.questions.clear(),
        ]);
        await Promise.all([
          db.subjects.bulkAdd(defaultSubjects),
          db.topics.bulkAdd(defaultTopics),
          db.questions.bulkAdd(defaultQuestions),
        ]);
        await db.meta.put({ key: "dataVersion", value: DATA_VERSION });

        setSubjects(defaultSubjects);
        setTopics(defaultTopics);
        setQuestions(defaultQuestions);
      } else {
        const [dbSubjects, dbTopics, dbQuestions] = await Promise.all([
          db.subjects.orderBy("order").toArray(),
          db.topics.orderBy("order").toArray(),
          db.questions.toArray(),
        ]);
        setSubjects(dbSubjects);
        setTopics(dbTopics);
        setQuestions(dbQuestions);
      }
    }

    loadData().then(() => void syncStats());
  }, []);

  const app = {
    subjects,
    topics,
    questions,
    db,
  };

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);

  if (!ctx) throw new Error("Must be used in AppProvider");

  return ctx;
}
