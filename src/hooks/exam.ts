"use client";
import { useState, useEffect, use } from "react";
import { ParamValue } from "next/dist/server/request/params";
import { ExamSession, Exam } from "@/components/config";
import { useImmer } from "use-immer";

import {
  Question,
  questions as allQuestions,
  questions,
} from "@/data/questions";
import { useApp } from "@/app/app-provider";

export default function useExam(examId: string) {
  const { db } = useApp();
  let [examSession, setExamSession] = useState<ExamSession | null>(null);

  const [currentExam, setCurrentExam] = useImmer<Exam | null>(null);
  const [questionMap, setQuestionMap] = useState<Map<string, Question>>(
    new Map(),
  );
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await db.exam_sessions.get(examId);
        if (session) {
          setExamSession(session);
          // use currentExam id to find the right exam, fallback to exams[0] for old sessions
          const active = session.currentExam
            ? session.exams.find((e) => e.id === session.currentExam)
            : undefined;
          setCurrentExam(active || session.exams[0]);
          setSubmitted(session.finished);

          // build question map
          const allIds = new Set(
            session.exams.flatMap((exam) =>
              exam.questions.map((eq) => eq.question),
            ),
          );
          const map = new Map<string, Question>();
          for (const q of allQuestions) {
            if (allIds.has(q.id)) map.set(q.id, q);
          }
          setQuestionMap(map);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSession();
  }, [db, examId]);

  const getDurationSeconds = () => {
    if (!examSession) return 0;
    const [h, m, s] = examSession.duration.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };

  const calcTimeLeft = () => {
    if (!examSession) return "00:00:00";
    const elapsed = Math.floor(
      (Date.now() - new Date(examSession.createdAt).getTime()) / 1000,
    );
    const remaining = Math.max(getDurationSeconds() - elapsed, 0);
    const hrs = Math.floor(remaining / 3600);
    const mins = Math.floor((remaining % 3600) / 60);
    const secs = remaining % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // set initial time once session loads
  useEffect(() => {
    if (examSession) {
      setTimeLeft(calcTimeLeft());
    }
  }, [examSession]);

  const markUp = () => {
    setCurrentExam((draft) => {
      if (draft) draft.score += 1;
    });
  };

  const markDown = () => {
    setCurrentExam((draft) => {
      if (draft) draft.score -= 1;
    });
  };

  const finishExam = async () => {
    if (!examSession) return;
    examSession.finished = true;
    await db.exam_sessions.put(examSession);
  };

  useEffect(() => {
    if (!examSession || submitted) return;

    const interval = setInterval(() => {
      const next = calcTimeLeft();
      setTimeLeft(next);
      if (next === "00:00:00") {
        clearInterval(interval);
        setSubmitted(true);
        void finishExam();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [examSession, submitted]);

  const submit = () => {
    setSubmitted(true);
    void finishExam();
  };

  useEffect(() => {
    if (!examSession || !currentExam) return;
    // persist to the correct exam by id, fallback to index 0 for old sessions
    const idx = currentExam.id
      ? examSession.exams.findIndex((e) => e.id === currentExam.id)
      : 0;
    examSession.exams[idx === -1 ? 0 : idx] = currentExam;
    void db.exam_sessions.put(examSession).catch(console.error);
  }, [currentExam]);

  if (!examSession || !currentExam) return null;

  return {
    exams: examSession.exams,
    currentExam,
    setCurrentExam: setCurrentExam as import("use-immer").Updater<Exam>,
    timeLeft,
    questionMap,
    markUp,
    markDown,
    submitted,
    submit,
  };
}

// Cool. This is exactly what we need.
