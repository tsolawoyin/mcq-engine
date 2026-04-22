import { AppDB, QuestionStat } from "./db";
import { Question } from "@/data/questions";

/** Record a single attempt for a question. Creates the row if first attempt. */
export async function recordAttempt(
  db: AppDB,
  question: Question,
  correct: boolean
): Promise<void> {
  const existing = await db.question_stats.get(question.id);

  const attempt = { timestamp: Date.now(), correct };

  if (existing) {
    await db.question_stats.update(question.id, {
      attempts: [...existing.attempts, attempt],
    });
  } else {
    const stat: QuestionStat = {
      questionId: question.id,
      subjectId: question.subject,
      topicId: question.topic,
      attempts: [attempt],
    };
    await db.question_stats.add(stat);
  }
}
