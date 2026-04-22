"use client";

import { useTopicMastery } from "@/hooks/mastery";

export function MasteryBadge({ topicId }: { topicId: string }) {
  const mastery = useTopicMastery(topicId);

  const pct = mastery ? Math.round(mastery * 100) : 0;
  const color =
    pct < 40
      ? "text-red-500"
      : pct < 70
        ? "text-yellow-500"
        : "text-green-500";

  return <span className={`ml-auto font-medium ${color}`}>{pct}%</span>;
}
