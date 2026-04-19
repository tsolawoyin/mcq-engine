"use client";

import { createContext, useContext } from "react";
import useExam from "@/hooks/exam";
import { Exam, ExamSession } from "@/components/config";
import { Question } from "@/data/questions";
import { Updater } from "use-immer";

interface ExamContextValue {
  exams: Exam[];
  currentExam: Exam;
  setCurrentExam: Updater<Exam>;
  timeLeft: string;
  questionMap: Map<string, Question>;
  markUp: () => void;
  markDown: () => void;
  submitted: boolean;
  submit: () => void;
}

const ExamContext = createContext<ExamContextValue | null>(null);

export default function ExamProvider({
  examId,
  children,
}: {
  examId: string;
  children: React.ReactNode;
}) {
  const exam = useExam(examId); // hmmm. sharp stuff... nice and easy....

  if (!exam) return <div>Exam not found or does not exist.</div>;

  return <ExamContext.Provider value={exam}>{children}</ExamContext.Provider>;
}

export function useExamContext() {
  const ctx = useContext(ExamContext);

  if (!ctx) throw new Error("useExamContext must be used within ExamProvider");

  return ctx;
}
