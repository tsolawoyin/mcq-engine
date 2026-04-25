"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ChevronDown, InfoIcon, Loader2Icon, Plus, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useApp } from "@/app/app-provider";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";
import { Subject } from "@/data/subjects";
import { Topic } from "@/data/topics";
import { Question } from "@/data/questions";
import Link from "next/link";
import { ModeToggle } from "./toggler";
import { MasteryBadge } from "./mastery-badge";
import { useImmer, Updater } from "use-immer";

export interface Exam {
  id: string;
  subject: Subject;
  topics: Topic[];
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
  const { subjects, topics, questions, db } = useApp();

  const firstSubject = subjects[0];
  const [selections, setSelections] = useImmer<Exam[]>([]);
  const [initialized, setInitialized] = useState(false);

  // Initialize selections once data is loaded from db
  useEffect(() => {
    if (initialized || subjects.length === 0 || topics.length === 0) return;
    setSelections([
      {
        id: "selection-0",
        subject: firstSubject,
        topics: [topics.filter((topic) => topic.subject == firstSubject.id)[0]],
        noq: "",
        questions: [],
        currentQuestion: 0,
        score: 0,
      },
    ]);
    setInitialized(true);
  }, [subjects, topics]);

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
      return !isNaN(n) && n >= 1 && n <= 100 && s.topics.length > 0;
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
      const generated = getRandomQuestions(questions, sel.subject.id, sel.topics.map(t => t.id), noq);
      return {
        id: v4(),
        subject: sel.subject,
        topics: sel.topics,
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

  if (!initialized) {
    return (
      <div className="flex-2 grid items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-2 grid items-center">
      <div className="grid gap-5">
        <AnimatePresence initial={false}>
          {selections.map((selection, index) => (
            <motion.div
              key={selection.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <SelectionInt
                index={index}
                selection={selection}
                setSelections={setSelections}
                canRemove={selections.length > 1}
              />
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Exactly... */}
        {selections.length < 4 && (
        <button
          className="flex w-full items-center justify-center gap-1.5 rounded-[14px] border-[1.5px] border-dashed border-muted-foreground/30 py-3.5 text-sm text-muted-foreground transition-colors active:bg-muted/50"
          onClick={() => {
            setSelections((draft) => {
              draft.push({
                id: v4(),
                subject: firstSubject,
                topics: [topics.filter(
                  (topic) => topic.subject == firstSubject.id,
                )[0]],
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
        )}
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
              draft[index].topics = firstTopic ? [firstTopic] : [];
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs">
            <span className="truncate text-left">
              {selection.topics.length === 0
                ? "Select topics"
                : selection.topics.length === 1
                  ? selection.topics[0].name
                  : `${selection.topics.length} topics selected`}
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {topics
            .filter((topic) => topic.subject == selection.subject.id)
            .map((topic) => {
              const isSelected = selection.topics.some((t) => t.id === topic.id);
              return (
                <DropdownMenuCheckboxItem
                  key={topic.id}
                  checked={isSelected}
                  onSelect={(e) => e.preventDefault()}
                  onCheckedChange={() => {
                    setSelections((draft) => {
                      const idx = draft[index].topics.findIndex(
                        (t) => t.id === topic.id,
                      );
                      if (idx >= 0) {
                        draft[index].topics.splice(idx, 1);
                      } else {
                        draft[index].topics.push(topic);
                      }
                    });
                  }}
                >
                  <span className="flex items-center gap-2">
                    {topic.name}
                    <MasteryBadge topicId={topic.id} />
                  </span>
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
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
  questions: Question[],
  subjectId: string,
  topicIds: string[],
  count: number,
): ExamQuestion[] => {
  const cap = Math.min(count, 100);
  const topicSet = new Set(topicIds);

  const pool = questions.filter(
    (q) => q.subject === subjectId && topicSet.has(q.topic) && q.is_visible,
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
