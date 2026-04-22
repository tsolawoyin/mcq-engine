import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { topicMastery } from "@/lib/mastery";
import { questions } from "@/data/questions";

function totalQuestionsForTopic(topicId: string): number {
  return questions.filter((q) => q.topic === topicId && q.is_visible).length;
}

/** Live mastery score (0-1) for a single topic. Returns undefined while loading, null if no data. */
export function useTopicMastery(topicId: string): number | null | undefined {
  return useLiveQuery(async () => {
    const total = totalQuestionsForTopic(topicId);
    const stats = await db.question_stats
      .where("topicId")
      .equals(topicId)
      .toArray();
    return topicMastery(stats, total, Date.now());
  }, [topicId]);
}

/** Live mastery scores for all topics. Returns undefined while loading. */
export function useAllTopicMasteries(): Map<string, number> | undefined {
  return useLiveQuery(async () => {
    const allStats = await db.question_stats.toArray();
    const map = new Map<string, number>();

    // group by topicId
    const grouped = new Map<string, typeof allStats>();
    for (const s of allStats) {
      const arr = grouped.get(s.topicId);
      if (arr) arr.push(s);
      else grouped.set(s.topicId, [s]);
    }

    // compute for all topics that have questions, not just attempted ones
    const topicIds = new Set(questions.filter((q) => q.is_visible).map((q) => q.topic));
    const now = Date.now();
    for (const topicId of topicIds) {
      const stats = grouped.get(topicId) ?? [];
      const total = totalQuestionsForTopic(topicId);
      const m = topicMastery(stats, total, now);
      if (m !== null) map.set(topicId, m);
    }

    return map;
  }, []);
}
