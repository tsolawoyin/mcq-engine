"use client";
import { Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExamQuestion } from "@/components/config";
import { useParams } from "next/navigation";
import ExamProvider, { useExamContext } from "@/app/exam/[id]/exam-provider";
import { useApp } from "@/app/app-provider";
import { recordAttempt } from "@/lib/record-attempt";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading exam...</div>}>
      <ExamPage />
    </Suspense>
  );
}

function ExamPage() {
  const { id } = useParams();

  return (
    <ExamProvider examId={id as string}>
      <ExamContent />
    </ExamProvider>
  );
}

function ExamContent() {
  const { timeLeft, currentExam, questionMap, exams, setCurrentExam } =
    useExamContext();

  return (
    <div className="grid flex-1 grid-rows-[auto_1fr] gap-5 pb-15">
      <div className="flex items-center justify-between text-2xl">
        <div>{timeLeft}</div>
        {exams.length > 1 && (
          <Select
            value={currentExam.id}
            onValueChange={(id) => {
              const exam = exams.find((e) => e.id === id);
              if (exam) setCurrentExam(() => exam);
            }}
          >
            <SelectTrigger className="h-auto w-auto max-w-40 gap-1.5 border-none bg-transparent px-2 py-1 text-sm font-medium shadow-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="center">
              {exams.map((exam) => (
                <SelectItem key={exam.id} value={exam.id}>
                  {exam.topic.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        <div className="text-red-600 text-3xl">
          {Number(currentExam.noq) > 0
            ? Math.round((currentExam.score / Number(currentExam.noq)) * 100)
            : 0}
          %
        </div>
      </div>
      <RenderQuestion key={currentExam.id} />
    </div>
  );
}

function RenderQuestion() {
  const {
    currentExam,
    setCurrentExam,
    questionMap,
    markUp,
    markDown,
    timeLeft,
    submitted,
    submit,
  } = useExamContext();
  const { db } = useApp();
  const examEnded = timeLeft === "00:00:00" || submitted;
  const questions = currentExam.questions;
  const [currentIndex, setCurrentIndex] = useState(currentExam.currentQuestion);

  const examQ = questions[currentIndex];

  if (!examQ) return <div>No questions available for this exam.</div>;

  // we need a way to track score across refresh
  const markCurrent = () => {
    // if (markedIds.has(examQ.id) || !examQ.userAnswer) return;
    if (questions[currentIndex].marked || !examQ.userAnswer) return; // sharp
    const question = questionMap.get(examQ.question);
    if (!question) return;

    const isCorrect = examQ.userAnswer === question.answer;
    if (isCorrect) markUp();
    else markDown();

    void recordAttempt(db, question, isCorrect);

    setCurrentExam((draft) => {
      // exactly. this will help persist state....
      draft.questions[currentIndex].marked = true;
    });
  };

  const prev = () => {
    markCurrent();
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  const next = () => {
    markCurrent();
    setCurrentIndex((i) => Math.min(i + 1, questions.length - 1));
  };

  const jumpTo = (index: number) => {
    markCurrent();
    setCurrentIndex(index);
  };

  // better. thank you.
  useEffect(() => {
    setCurrentExam((draft) => {
      draft.currentQuestion = currentIndex;
    });
  }, [currentIndex, setCurrentExam]);

  return (
    <div className="grid h-full grid-rows-[1fr_auto] gap-4">
      <div className="mt-7 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={examQ.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid gap-4"
          >
            <div className="text-sm text-muted-foreground">
              Question {currentIndex + 1} of {questions.length}
            </div>
            <QuestionInt
              examQ={examQ}
              marked={currentExam.questions[currentIndex].marked}
              disabled={examEnded}
              examEnded={examEnded}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="grid gap-5">
        <div className="flex gap-4">
          <Button
            onClick={prev}
            disabled={currentIndex === 0}
            variant="outline"
          >
            Previous
          </Button>
          <Button
            onClick={next}
            disabled={currentIndex === questions.length - 1}
            variant="outline"
          >
            Next
          </Button>
        </div>
        {!examEnded && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Submit</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Submit exam?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will end your exam. You won't be able to change your
                  answers after submitting.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={submit}>Submit</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
        <QuestionNav
          questions={questions}
          currentIndex={currentIndex}
          onJump={jumpTo}
        />
        {/* <Footer /> */}
        <p className="fixed bottom-0 mt-auto w-full bg-background py-3 text-center text-xs text-muted-foreground">
          Spot an error?{" "}
          <a
            href="https://wa.me/2348162200772"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Report it
          </a>
        </p>
      </div>
    </div>
  );
}

const QuestionInt = ({
  examQ,
  marked,
  disabled,
  examEnded,
}: {
  examQ: ExamQuestion;
  marked: boolean;
  disabled: boolean;
  examEnded: boolean;
}) => {
  const { questionMap, setCurrentExam } = useExamContext();
  const question = questionMap.get(examQ.question);

  if (!question) {
    return null;
  }

  const selectAnswer = (option: string) => {
    if (marked || disabled) return; // locked after marking or time up
    setCurrentExam((draft) => {
      const q = draft.questions.find((q) => q.id === examQ.id);
      if (q) q.userAnswer = option;
    });
  };

  const showAnswer = marked || examEnded;

  const getOptionStyle = (option: string) => {
    if (!showAnswer) {
      return examQ.userAnswer === option
        ? "bg-primary text-primary-foreground"
        : "";
    }
    // after marking or exam ended: green for correct, red for wrong selection
    if (option === question.answer)
      return "bg-green-600 text-white border-green-600";
    if (examQ.userAnswer === option)
      return "bg-red-600 text-white border-red-600";
    return "";
  };

  return (
    <div className="grid gap-3">
      <p className="text-lg font-medium">{question.question}</p>
      <div className="grid gap-2">
        {(examQ.shuffledOptions ?? question.options).map((option) => (
          <button
            key={option}
            className={`w-full rounded-md border border-border bg-background px-3 py-2 text-left text-sm font-medium shadow-xs transition-all ${getOptionStyle(option)}`}
            onClick={() => selectAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {showAnswer && question.explanation && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-muted-foreground mt-2"
          >
            {question.explanation}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

function QuestionNav({
  questions,
  currentIndex,
  onJump,
}: {
  questions: ExamQuestion[];
  currentIndex: number;
  onJump: (index: number) => void;
}) {
  const { questionMap } = useExamContext();

  const getKeyStyle = (eq: ExamQuestion, index: number) => {
    if (index === currentIndex) return "ring-2 ring-primary";

    if (!eq.marked) {
      // unanswered / not yet marked — neutral
      return "bg-muted text-muted-foreground";
    }

    const question = questionMap.get(eq.question);
    if (!question) return "bg-muted text-muted-foreground";

    if (eq.userAnswer === question.answer)
      return "bg-green-600 text-white border-green-600";
    return "bg-red-600 text-white border-red-600";
  };

  return (
    <div className="flex flex-wrap gap-2">
      {questions.map((eq, index) => (
        <motion.button
          key={eq.id}
          layout
          transition={{ duration: 0.15 }}
          className={`flex h-8 w-8 items-center justify-center rounded-md border text-sm font-medium transition-colors hover:opacity-80 ${getKeyStyle(eq, index)}`}
          onClick={() => onJump(index)}
        >
          {index + 1}
        </motion.button>
      ))}
    </div>
  );
}
