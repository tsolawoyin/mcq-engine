"use client";
import { useState, useEffect, use } from "react";
import { ParamValue } from "next/dist/server/request/params";
import { ExamSession } from "@/components/config";
import { useImmer } from "use-immer";

import { Question, questions as allQuestions } from "@/data/questions";

export default function useExam(examId: string) {
  let examData = localStorage.getItem(examId);

  if (!examData) return null;

  const examSession: ExamSession = JSON.parse(examData);

  const { id, duration, exams, markInstantly, createdAt } = examSession;

  const [currentExam, setCurrentExam] = useImmer(exams[0]);
  const [questionMap, setQuestionMap] = useState<Map<string, Question>>(
    new Map(),
  );

  const getDurationSeconds = () => {
    const [h, m, s] = duration.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };

  const calcTimeLeft = () => {
    const elapsed = Math.floor(
      (Date.now() - new Date(createdAt).getTime()) / 1000,
    );
    const remaining = Math.max(getDurationSeconds() - elapsed, 0);
    const hrs = Math.floor(remaining / 3600);
    const mins = Math.floor((remaining % 3600) / 60);
    const secs = remaining % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const markUp = () => {
    setCurrentExam((draft) => {
      draft.score += 1;
    });
  };

  const markDown = () => {
    setCurrentExam((draft) => {
      draft.score -= 1;
    });
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);
  const [submitted, setSubmitted] = useState(examSession.finished);

  const finishExam = () => {
    examSession.finished = true;
    localStorage.setItem(examId, JSON.stringify(examSession));
  };

  useEffect(() => {
    if (submitted) return;

    const interval = setInterval(() => {
      const next = calcTimeLeft();
      setTimeLeft(next);
      if (next === "00:00:00") {
        clearInterval(interval);
        setSubmitted(true);
        finishExam();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [submitted]);

  const submit = () => {
    setSubmitted(true);
    finishExam();
  };

  useEffect(() => {
    examSession.exams[0] = currentExam;
    localStorage.setItem(examId, JSON.stringify(examSession));
  }, [currentExam]);

  useEffect(() => {
    // collect question IDs across all exams
    const allIds = new Set(
      exams.flatMap((exam) => exam.questions.map((eq) => eq.question)),
    );
    const map = new Map<string, Question>();
    for (const q of allQuestions) {
      if (allIds.has(q.id)) map.set(q.id, q);
    }
    setQuestionMap(map);
  }, []);

  return {
    exams,
    currentExam,
    setCurrentExam,
    timeLeft,
    questionMap,
    markUp,
    markDown,
    submitted,
    submit,
  };
}

// Cool. This is exactly what we need.
