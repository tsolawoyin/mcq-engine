"use client";

import { Flame } from "lucide-react";
import { useStreak } from "@/hooks/streak";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function StreakBadge() {
  const streak = useStreak();

  if (!streak || (streak.current === 0 && streak.longest === 0)) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-1 rounded-full px-2 py-1 text-sm font-semibold transition-colors hover:bg-muted">
          <Flame
            className={`h-5 w-5 ${streak.todayDone ? "text-orange-500" : "text-muted-foreground"}`}
          />
          <span className={streak.todayDone ? "text-orange-500" : "text-muted-foreground"}>
            {streak.current}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56 p-4">
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-orange-500" />
            <div>
              <p className="text-lg font-bold leading-none">
                {streak.current} {streak.current === 1 ? "day" : "day"} streak
              </p>
              {streak.todayDone ? (
                <p className="text-xs text-muted-foreground mt-0.5">
                  You&apos;ve practiced today!
                </p>
              ) : (
                <p className="text-xs text-orange-500 mt-0.5">
                  Practice today to keep it going!
                </p>
              )}
            </div>
          </div>
          {streak.longest > streak.current && (
            <div className="border-t pt-2">
              <p className="text-xs text-muted-foreground">
                Longest streak: <span className="font-semibold text-foreground">{streak.longest} days</span>
              </p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
