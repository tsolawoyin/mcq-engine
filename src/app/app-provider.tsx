"use client";

import { createContext, useContext } from "react";
import { Subject } from "@/data/subjects";
import { Topic } from "@/data/topics";
import { Question } from "@/data/questions";
import { db, AppDB } from "@/lib/db";

interface App {
  subjects: Subject[];
  topics: Topic[];
  questions: Question[];
  db: AppDB
}

export const AppContext = createContext<App | null>(null);

export default function AppProvider({
  children,
  subjects,
  topics,
  questions,
}: {
  children: React.ReactNode;
  subjects: Subject[];
  topics: Topic[];
  questions: Question[];
}) {
  const app = {
    subjects,
    topics,
    questions,
    db, // no need creating anything sha. It's ok like this.
  };

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);

  if (!ctx) throw new Error("Must be used in AppProvider");

  return ctx;
}
