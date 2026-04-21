import { ModeToggle } from "../toggler";

export default function Header() {
  return (
    <div className="pb-10 dark:bg-black light:bg-white flex justify-between">
      <p className="text-center text-2xl font-bold">D💀C</p>
      <ModeToggle />
    </div>
  );
}
