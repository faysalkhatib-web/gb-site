"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.body.classList.add("cursor-none");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      setActive(Boolean(target));
      setLabel(target?.getAttribute("data-cursor") || null);
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const tick = () => {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full bg-cream mix-blend-difference transition-[width,height] duration-300 ease-premium ${
        active ? "h-24 w-24" : "h-3 w-3"
      }`}
    >
      {label && (
        <span className="whitespace-nowrap text-[0.65rem] font-bold uppercase tracking-wide text-ink">
          {label}
        </span>
      )}
    </div>
  );
}
