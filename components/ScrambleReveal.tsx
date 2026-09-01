"use client";

import { useEffect, useState } from "react";
import { ScrambleText } from "./ScrambleText";

export function ScrambleReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return <ScrambleText text={text} active={active} className={className} />;
}
