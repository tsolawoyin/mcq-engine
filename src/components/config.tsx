"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { InfoIcon, Loader2Icon, Plus, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useApp } from "@/app/app-provider";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";
import { Subject } from "@/data/subjects";
import { Topic } from "@/data/topics";
import { Question, questions } from "@/data/questions";
import Link from "next/link";
import { ModeToggle } from "./toggler";
import { useImmer, Updater } from "use-immer";

export interface Exam {
  id: string;
  subject: Subject;
  topic: Topic;
  noq: string; //but meant to be number but having issue with 0 in input element
  questions: ExamQuestion[];
  currentQuestion: number;
  score: number;
}

export interface ExamSession {
  id: string;
  duration: string;
  exams: Exam[];
  currentExam: string;
  markInstantly: boolean;
  createdAt: Date;
  finished: boolean;
}

export interface ExamQuestion {
  id: string;
  position: number;
  question: string; // id of question
  shuffledOptions: string[];
  userAnswer: string; // done....
  marked: boolean;
}

// my brain is working at the speed of light...

export default function Config() {
  const { subjects, topics, db } = useApp();
  //   It will be easy to extend later....
  const firstSubject = subjects[0];
  const [selections, setSelections] = useImmer<Exam[]>([
    {
      id: v4(),
      subject: firstSubject,
      topic: topics.filter((topic) => topic.subject == firstSubject.id)[0],
      noq: "",
      questions: [],
      currentQuestion: 0,
      score: 0,
    },
  ]);

  const [time, setTime] = useState("");
  const [markInstantly, setMarkInstantly] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Cooking...");
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, [router]);

  const loadingMessages = [
    "Dacing...",
    "Cooking...",
    "Brewing...",
    "Conjuring...",
    "Summoning...",
    "Shuffling...",
    "Crunching...",
    "Calculating",
    "Dillydallying",
  ];

  const canStart =
    selections.length > 0 &&
    selections.every((s) => {
      const n = parseInt(s.noq, 10);
      return !isNaN(n) && n >= 1 && n <= 100;
    }) &&
    time !== "";

  const handleCreate = async () => {
    setIsLoading(true);
    setLoadingText(
      loadingMessages[Math.floor(Math.random() * loadingMessages.length)],
    );

    const id = v4();

    // generate questions for each selection
    const exams: Exam[] = selections.map((sel) => {
      const noq = Math.min(parseInt(sel.noq, 10) || 20, 100);
      const generated = getRandomQuestions(sel.subject.id, sel.topic.id, noq);
      return {
        id: v4(),
        subject: sel.subject,
        topic: sel.topic,
        noq: String(generated.length),
        questions: generated,
        currentQuestion: 0,
        score: 0,
      };
    });

    const examState: ExamSession = {
      id,
      duration: time ? `${convertTime(time)}` : "00:20:00", // default to 20...
      exams,
      currentExam: exams[0].id,
      markInstantly,
      createdAt: new Date(),
      finished: false,
    };

    try {
      // just like adding to local storage without the json parse
      await db.exam_sessions.add(examState);
      router.push(`/exam/${id}`);
    } catch (error) {
      console.log("An error occured...");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-2 grid items-center">
      <div className="grid gap-5">
        {selections.map((selection, index) => {
          return (
            <SelectionInt
              key={index}
              index={index}
              selection={selection}
              setSelections={setSelections}
              canRemove={selections.length > 1}
            />
          );
        })}
        {/* Exactly... */}
        <button
          className="flex w-full items-center justify-center gap-1.5 rounded-[14px] border-[1.5px] border-dashed border-muted-foreground/30 py-3.5 text-sm text-muted-foreground transition-colors active:bg-muted/50"
          onClick={() => {
            setSelections((draft) => {
              draft.push({
                id: v4(),
                subject: firstSubject,
                topic: topics.filter(
                  (topic) => topic.subject == firstSubject.id,
                )[0],
                noq: "",
                questions: [],
                currentQuestion: 0,
                score: 0,
              });
            });
          }}
        >
          <Plus className="h-3 w-3" />
          Add combination
        </button>
        <div className="grid gap-3">
          <Input
            placeholder="Enter time in minutes"
            type="number"
            value={time}
            onChange={(e) => {
              const time = e.target.value;
              setTime(time);
            }}
          />
          <Button onClick={handleCreate} disabled={isLoading || !canStart}>
            {isLoading && <Loader2Icon className="animate-spin" />}
            {isLoading
              ? loadingText
              : `Start${selections.length > 1 ? ` ${selections.length} Exams` : ""}`}
          </Button>
        </div>
        <Alert className="">
          <InfoIcon />
          <AlertTitle>Take note</AlertTitle>
          <AlertDescription className="text-pink-600">
            Questions are marked instantly and there is <strong>-1</strong> for
            selecting the wrong answer
          </AlertDescription>
        </Alert>
        <Button variant="link" className="w-full underline">
          <Link href={"/exam"}>View past exams</Link>
        </Button>
        {/* <p>No data is collected in this app. YOUR RESULTS REMAIN ON YOUR PHONE. No one can view it.</p> */}
      </div>
    </div>
  );
}

function SelectionInt({
  selection,
  index,
  setSelections,
  canRemove,
}: {
  selection: Exam;
  index: number;
  setSelections: Updater<Exam[]>;
  canRemove: boolean;
}) {
  const { subjects, topics } = useApp();

  return (
    <div className="relative grid gap-3 rounded-2xl border bg-card p-3">
      {canRemove && (
        <button
          className="absolute -top-2.5 -right-2.5 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-red-500 text-xs font-bold text-white"
          onClick={() => {
            setSelections((draft) => {
              draft.splice(index, 1);
            });
          }}
        >
          <X className="h-3 w-3" />
        </button>
      )}
      <Select
        value={selection.subject.id}
        onValueChange={(value) => {
          const sub = subjects.find((subject) => subject.id == value);
          if (sub) {
            const firstTopic = topics.filter(
              (topic) => topic.subject == sub.id,
            )[0];
            setSelections((draft) => {
              draft[index].subject = sub;
              draft[index].topic = firstTopic || {
                id: "",
                name: "",
                subject: sub.id,
              };
            });
          }
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a course" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {subjects.map((subject) => {
              return (
                <SelectItem key={subject.id} value={subject.id}>
                  {subject.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        value={selection.topic.id}
        onValueChange={(value) => {
          const top = topics.find((top) => top.id == value);
          if (top) {
            setSelections((draft) => {
              draft[index].topic = top;
            });
          }
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a topic" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {topics
              .filter((topic) => topic.subject == selection.subject.id)
              .map((topic) => {
                return (
                  <SelectItem key={topic.id} value={topic.id}>
                    {topic.name}
                  </SelectItem>
                );
              })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        placeholder="Enter number of questions 1 - 100"
        type="number"
        value={selection.noq}
        onChange={(e) => {
          setSelections((draft) => {
            draft[index].noq = e.target.value;
          });
        }}
      />
    </div>
  );
}

const convertTime = (time: string) => {
  const totalMinutes = parseInt(time, 10);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;
};

// this function will end up being an rpc function laslas....
const getRandomQuestions = (
  subjectId: string,
  topicId: string,
  count: number,
): ExamQuestion[] => {
  const cap = Math.min(count, 100);

  const pool = questions.filter(
    (q) => q.subject === subjectId && q.topic === topicId && q.is_visible,
  );

  const shuffleArray = <T,>(arr: T[]): T[] => {
    const s = [...arr];
    for (let i = s.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
  };

  const toExamQuestion = (q: Question, index: number): ExamQuestion => ({
    id: v4(),
    position: index,
    question: q.id,
    shuffledOptions: shuffleArray(q.options),
    userAnswer: "",
    marked: false,
  });

  // pick min(cap, available) unique questions via Fisher-Yates
  const target = Math.min(cap, pool.length);
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, target).map(toExamQuestion);
};
