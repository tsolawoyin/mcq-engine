"use client";
import { Suspense, useState } from "react";
import { ExamQuestion } from "@/components/config";
import { useParams } from "next/navigation";
import ExamProvider, { useExamContext } from "@/provider/exam-provider";
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
import Footer from "@/components/ui/footer";

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
  const { timeLeft, currentExam, questionMap } = useExamContext();

  return (
    <div className="grid flex-1 grid-rows-[auto_1fr] gap-5">
      <div className="flex justify-between text-2xl items-center">
        <div>{timeLeft}</div>
        <div className="text-red-600 text-3xl">{currentExam.score}</div>
      </div>
      <RenderQuestion />
    </div>
  );
}

function RenderQuestion() {
  const {
    currentExam,
    questionMap,
    markUp,
    markDown,
    timeLeft,
    submitted,
    submit,
  } = useExamContext();
  const examEnded = timeLeft === "00:00:00" || submitted;
  const questions = currentExam.questions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [markedIds, setMarkedIds] = useState<Set<string>>(new Set());

  const examQ = questions[currentIndex];

  if (!examQ) return <div>No questions available for this exam.</div>;

  const markCurrent = () => {
    if (markedIds.has(examQ.id) || !examQ.userAnswer) return;
    const question = questionMap.get(examQ.question);
    if (!question) return;

    if (examQ.userAnswer === question.answer) markUp();
    else markDown();

    setMarkedIds((prev) => new Set(prev).add(examQ.id));
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

  return (
    <div className="grid h-full grid-rows-[1fr_auto] gap-4">
      <div className="mt-7">
        <div className="grid gap-4 overflow-y-auto">
          <div className="text-sm text-muted-foreground">
            Question {currentIndex + 1} of {questions.length}
          </div>
          <QuestionInt
            examQ={examQ}
            marked={markedIds.has(examQ.id)}
            disabled={examEnded}
          />
        </div>
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
          markedIds={markedIds}
          onJump={jumpTo}
        />
        <Footer />
      </div>
    </div>
  );
}

const QuestionInt = ({
  examQ,
  marked,
  disabled,
}: {
  examQ: ExamQuestion;
  marked: boolean;
  disabled: boolean;
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

  const getOptionStyle = (option: string) => {
    if (!marked) {
      return examQ.userAnswer === option
        ? "bg-primary text-primary-foreground"
        : "";
    }
    // after marking: green for correct, red for wrong selection
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
        {question.options.map((option) => (
          <Button
            key={option}
            variant="outline"
            className={`justify-start text-left ${getOptionStyle(option)}`}
            onClick={() => selectAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

function QuestionNav({
  questions,
  currentIndex,
  markedIds,
  onJump,
}: {
  questions: ExamQuestion[];
  currentIndex: number;
  markedIds: Set<string>;
  onJump: (index: number) => void;
}) {
  const { questionMap } = useExamContext();

  const getKeyStyle = (eq: ExamQuestion, index: number) => {
    if (index === currentIndex) return "ring-2 ring-primary";

    if (!markedIds.has(eq.id)) {
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
        <Button
          key={eq.id}
          variant="outline"
          size="sm"
          className={`h-8 w-8 p-0 ${getKeyStyle(eq, index)}`}
          onClick={() => onJump(index)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
}
