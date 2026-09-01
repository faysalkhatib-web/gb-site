import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  kicker,
  title,
  copy,
  children,
}: {
  kicker: string;
  title: ReactNode;
  copy?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-20 sm:pt-28">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, #F4D68E 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #2955A6 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue">{kicker}</p>
          <h1 className="max-w-3xl font-display text-5xl font-black uppercase leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {copy && <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{copy}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
