import { ModeToggle } from "../toggler";
import { StreakBadge } from "../streak-badge";
import { XpBadge } from "../xp-badge";
import Link from "next/link";
import { Trophy } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between bg-background/80 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <Link href="/">
          <p className="text-2xl font-bold tracking-tight">D💀C</p>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/leaderboard"
          className="flex items-center gap-1 rounded-full px-2 py-1 text-sm font-semibold transition-colors hover:bg-muted"
        >
          <Trophy className="h-5 w-5 text-yellow-500" />
        </Link>
        <XpBadge />
        <StreakBadge />
        <ModeToggle />
      </div>
    </header>
  );
}
