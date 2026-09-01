import type { CSSProperties } from "react";

const BASES = ["#1E3F80", "#2955A6", "#F3E8D3", "#2A241A"];
const BLOOMS = ["#2955A6", "#F4D68E", "#E4BB5E", "#FFFBF4", "#1E3F80"];

// Deterministic PRNG so the same seed always renders the same artwork.
function mulberry32(a: number) {
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), a | 1);
    t = (t + Math.imul(t ^ (t >>> 7), t | 61)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Generates a soft, boutique-label "cover art" gradient from a seed — used in
 * place of real artist/release photography until it's supplied. */
export function generativeArt(seed: number): CSSProperties {
  const rand = mulberry32(seed * 7919 + 104729);

  const base = BASES[Math.floor(rand() * BASES.length)];
  const bloomA = BLOOMS[Math.floor(rand() * BLOOMS.length)];
  const bloomB = BLOOMS[Math.floor(rand() * BLOOMS.length)];

  const ax = Math.round(15 + rand() * 70);
  const ay = Math.round(10 + rand() * 60);
  const bx = Math.round(15 + rand() * 70);
  const by = Math.round(40 + rand() * 55);
  const angle = Math.round(rand() * 360);

  return {
    backgroundColor: base,
    backgroundImage: [
      `radial-gradient(circle at ${ax}% ${ay}%, ${bloomA}CC 0%, transparent 58%)`,
      `radial-gradient(circle at ${bx}% ${by}%, ${bloomB}B3 0%, transparent 62%)`,
      `linear-gradient(${angle}deg, rgba(255,255,255,0.10), rgba(0,0,0,0.10))`,
    ].join(", "),
  };
}
