"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { useApp } from "../app-provider";
import { ExamSession } from "@/components/config";
import Link from "next/link";
import { CheckCircle2Icon, Trash2Icon } from "lucide-react";
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

// To view previously taken exams...
export default function Page() {
  const { db } = useApp();
  //   Yeah that's true oo... I didnt even see the pattern clearly sef
  const exams = useLiveQuery<ExamSession[]>(() =>
    db.exam_sessions.orderBy("createdAt").reverse().toArray()
  );

  if (!exams)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="grid gap-3 p-4">
      <p className="text-2xl">Exams</p>
      {exams.length === 0 ? (
        <p className="text-muted-foreground">No exams yet.</p>
      ) : (
        exams.map((exam) => <ExamInt key={exam.id} exam={exam} />)
      )}
    </div>
  );
}

function isExamTimeElapsed(exam: ExamSession): boolean {
  const [h, m, s] = exam.duration.split(":").map(Number);
  const durationMs = (h * 3600 + m * 60 + s) * 1000;
  const elapsed = Date.now() - new Date(exam.createdAt).getTime();
  return elapsed >= durationMs;
}

function ExamInt({ exam }: { exam: ExamSession }) {
  const { db } = useApp();
  const firstExam = exam.exams[0];
  const totalQuestions = Number(firstExam?.noq ?? 0);
  const score = firstExam?.score ?? 0;
  const date = new Date(exam.createdAt);

  const handleDelete = (id: string) => {
    db.exam_sessions.delete(id);
  };

  return (
    <div className="flex items-start justify-between rounded-md border p-3 hover:bg-muted transition-colors">
      <Link href={`/exam/${exam.id}`} className="grid gap-1 flex-1">
        <p className="underline underline-offset-2 font-medium text-sm dark:font-normal dark:no-underline">
          {firstExam?.subject.name} — {firstExam?.topic.name}
        </p>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          {exam.finished || isExamTimeElapsed(exam) ? (
            <>
              <span className="text-sm font-medium">
                {totalQuestions > 0
                  ? Math.round((score / totalQuestions) * 100)
                  : 0}
                %
              </span>
              <CheckCircle2Icon className="size-4 text-green-500" />
            </>
          ) : (
            <span className="text-sm text-muted-foreground">Resume...</span>
          )}
          <span>{date.toLocaleDateString()}</span>
        </div>
      </Link>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Trash2Icon className="size-4" />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete exam?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this exam session. This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={() => handleDelete(exam.id)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// Sharp...
