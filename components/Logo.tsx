import Link from "next/link";
import { PawMark } from "./icons";

export function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Good Boy Records — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-105 ${
          dark ? "bg-cream text-blue" : "bg-blue text-cream"
        }`}
      >
        <PawMark className="h-[18px] w-[18px]" />
      </span>
      <span className={`font-display text-lg font-black uppercase leading-none ${dark ? "text-cream" : "text-ink"}`}>
        Good Boy
        <span className="ml-1.5 align-middle text-[0.6rem] font-bold uppercase tracking-[0.24em] text-orange-deep">
          Records
        </span>
      </span>
    </Link>
  );
}
