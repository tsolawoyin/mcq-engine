"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { getAnonId } from "@/lib/anonymous-id";
import { Zap, Flame, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeaderboardEntry {
  id: string;
  username: string;
  total_xp: number;
  current_streak: number;
}

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [myId, setMyId] = useState<string | null>(null);

  useEffect(() => {
    setMyId(getAnonId());

    async function fetchLeaderboard() {
      const supabase = createClient();
      const { data } = await supabase
        .from("user_stats")
        .select("id, username, total_xp, current_streak")
        .gt("total_xp", 0)
        .order("total_xp", { ascending: false })
        .limit(50);

      if (data) setEntries(data);
      setLoading(false);
    }

    fetchLeaderboard();
  }, []);

  return (
    <div className="flex-1 py-4">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h1 className="text-2xl font-bold tracking-tight">Leaderboard</h1>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12 text-muted-foreground">
          Loading...
        </div>
      ) : entries.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">
          No entries yet. Start answering questions to appear here!
        </p>
      ) : (
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                <th className="px-3 py-2 text-left w-10">#</th>
                <th className="px-3 py-2 text-left">User</th>
                <th className="px-3 py-2 text-right">XP</th>
                <th className="px-3 py-2 text-right">Streak</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, i) => {
                const isMe = entry.id === myId;
                const rank = i + 1;

                return (
                  <tr
                    key={entry.id}
                    className={cn(
                      "border-b last:border-0",
                      isMe
                        ? "bg-yellow-500/10"
                        : "hover:bg-muted/30"
                    )}
                  >
                    <td
                      className={cn(
                        "px-3 py-2.5 font-bold",
                        rank === 1 && "text-yellow-500",
                        rank === 2 && "text-gray-400",
                        rank === 3 && "text-amber-600"
                      )}
                    >
                      {rank}
                    </td>
                    <td className="px-3 py-2.5 font-medium truncate max-w-[10rem]">
                      {entry.username}
                      {isMe && (
                        <span className="ml-1.5 text-xs text-muted-foreground">
                          (you)
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2.5 text-right font-semibold whitespace-nowrap">
                      <span className="inline-flex items-center gap-1">
                        <Zap className="h-3.5 w-3.5 text-yellow-500" />
                        {entry.total_xp}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-right whitespace-nowrap">
                      <span className="inline-flex items-center gap-1">
                        <Flame className="h-3.5 w-3.5 text-orange-500" />
                        {entry.current_streak}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
