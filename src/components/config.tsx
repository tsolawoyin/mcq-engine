"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CheckCircle2Icon, InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useApp } from "@/app/app-provider";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";
import { Subject } from "@/data/subjects";
import { Topic } from "@/data/topics";
import { Question, questions } from "@/data/questions";

export interface Exam {
  subject: Subject;
  topic: Topic;
  noq: number;
  questions: ExamQuestion[];
  currentQuestion: number;
  score: number;
}

export interface ExamSession {
  id: string;
  duration: string;
  exams: Exam[];
  markInstantly: boolean;
  createdAt: Date;
  finished: boolean;
}

export interface ExamQuestion {
  id: string;
  position: number;
  question: string; // id of question
  userAnswer: string; // done....
  marked: boolean;
}

// my brain is working at the speed of light...

export default function Config() {
  const { subjects, topics, db } = useApp();
  //   It will be easy to extend later....
  const [currentSubject, setCurrentSubject] = useState(subjects[0]);
  const [currentTopic, setCurrentTopic] = useState(
    topics.filter((topic) => topic.subject == currentSubject.id)[0], // then select the first...
  );
  const [time, setTime] = useState("");
  const [markInstantly, setMarkInstantly] = useState(true);
  const [numberOfQuestions, setNumberOfQuestions] = useState("");
  const router = useRouter();

  const handleCreate = async () => {
    const id = v4();

    // This will be a list of gettings in the future....
    const generatedQuestions = getRandomQuestions(
      currentSubject.id,
      currentTopic.id,
      numberOfQuestions ? Number(numberOfQuestions) : 20,
    );
    // actually, at this point user is fully ready to start...
    // so we create questions here too...
    // This structure is to enable future extensibility of the software.
    // To support multiple exams in one exam session. Shey you get...

    const examState: ExamSession = {
      id,
      duration: time ? `${convertTime(time)}` : "00:20:00", // default to 20...
      exams: [
        // each exam is a subject-topic combo... exactly.
        {
          subject: currentSubject,
          topic: currentTopic,
          noq: generatedQuestions.length,
          questions: generatedQuestions,
          currentQuestion: 0,
          score: 0,
        },
      ],
      markInstantly,
      createdAt: new Date(),
      finished: false,
    };

    try {
      // just like adding to local storage without the json parse
      await db.exam_sessions.add(examState);
      router.push(`/exam/${id}`);
    } catch (error) {
      console.log("An error occured...")
    }
  };

  return (
    <div className="flex-2 grid items-center">
      <div className="grid gap-5">
        <p className="text-center text-2xl">Configure practice</p>
        <div className="grid gap-3">
          <Select
            value={currentSubject.id}
            onValueChange={(value) => {
              let sub = subjects.find((subject) => subject.id == value);
              if (sub) {
                let firstTopic = topics.filter(
                  (topic) => topic.subject == sub.id,
                )[0];
                if (firstTopic) setCurrentTopic(firstTopic);
                else {
                  setCurrentTopic({
                    id: "",
                    name: "",
                    subject: sub.id,
                  });
                }
                setCurrentSubject(sub);
              }

              // It's actually not possible for subject not to exist. So no need to handle the other case.
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {subjects.map((subject) => {
                  return (
                    <SelectItem value={subject.id}>{subject.name}</SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={currentTopic.id}
            onValueChange={(value) => {
              let top = topics.find((top) => top.id == value);
              if (top) setCurrentTopic(top);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {topics
                  .filter((topic) => topic.subject == currentSubject.id)
                  .map((topic) => {
                    return (
                      <SelectItem value={topic.id}>{topic.name}</SelectItem>
                    );
                  })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            placeholder="Enter number of questions 1 - 100"
            type="number"
            value={numberOfQuestions}
            onChange={(e) => {
              const noq = e.target.value;
              setNumberOfQuestions(noq);
            }}
          />
          <Input
            placeholder="Enter time in minutes"
            type="number"
            value={time}
            onChange={(e) => {
              const time = e.target.value;
              setTime(time);
            }}
          />
          <Button onClick={handleCreate}>Start</Button>
        </div>
        <Alert className="">
          <InfoIcon />
          <AlertTitle>Take note</AlertTitle>
          <AlertDescription className="text-pink-600">
            Questions are marked instantly and there is <strong>-1</strong> for
            selecting the wrong answer
          </AlertDescription>
        </Alert>
      </div>
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
  const pool = questions.filter(
    (q) => q.subject === subjectId && q.topic === topicId && q.is_visible,
  );

  const toExamQuestion = (q: Question, index: number): ExamQuestion => ({
    id: v4(),
    position: index,
    question: q.id,
    userAnswer: "",
    marked: false,
  });

  //   just trying not to create duplicates...

  if (pool.length <= count) return pool.map(toExamQuestion);

  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count).map(toExamQuestion);
};
