import { ModeToggle } from "../toggler";
import { StreakBadge } from "../streak-badge";
import { XpBadge } from "../xp-badge";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between bg-background/80 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <Link href="/">
          <p className="text-2xl font-bold tracking-tight">D💀C</p>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <XpBadge />
        <StreakBadge />
        <ModeToggle />
      </div>
    </header>
  );
}
