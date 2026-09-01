import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  copy,
  align = "left",
  className = "",
  children,
}: {
  kicker?: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <div className={`flex flex-wrap items-end justify-between gap-6 ${align === "center" ? "flex-col items-center" : ""}`}>
        <div>
          {kicker && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue">{kicker}</p>
          )}
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] text-ink sm:text-5xl">
            {title}
          </h2>
          {copy && <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">{copy}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
