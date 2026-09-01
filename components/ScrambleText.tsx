"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function ScrambleText({
  text,
  active,
  className = "",
}: {
  text: string;
  active: boolean;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (!active) {
      clearInterval(intervalRef.current);
      setDisplay(text);
      return;
    }
    let iteration = 0;
    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );
      iteration += 1;
      if (iteration > text.length) clearInterval(intervalRef.current);
    }, 32);
    return () => clearInterval(intervalRef.current);
  }, [active, text]);

  return <span className={className}>{display}</span>;
}
