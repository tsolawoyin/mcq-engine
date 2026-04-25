import { ModeToggle } from "../toggler";
import { StreakBadge } from "../streak-badge";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between bg-background/80 py-3 backdrop-blur-sm">
      <Link href="/">
        <p className="text-2xl font-bold tracking-tight">D💀C</p>
      </Link>
      <div className="flex items-center gap-1">
        <StreakBadge />
        <ModeToggle />
      </div>
    </header>
  );
}
