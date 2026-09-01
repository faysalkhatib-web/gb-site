"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Artist } from "@/data/artists";
import { ArtistArt } from "./ArtistArt";
import { InstagramIcon, SpotifyIcon } from "./icons";

export function ArtistSpotlight({ artist, index }: { artist: Artist; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  const reversed = index % 2 === 1;
  const primaryIsSpotify = Boolean(artist.spotifyUrl);
  const primaryUrl = artist.spotifyUrl ?? artist.instagramUrl;
  const secondaryUrl = primaryIsSpotify ? artist.instagramUrl : undefined;

  return (
    <div ref={ref} className="relative grid grid-cols-1 items-stretch sm:grid-cols-2">
      <div
        className={`relative order-1 aspect-[4/5] overflow-hidden sm:aspect-auto sm:min-h-[78vh] ${
          reversed ? "sm:order-2" : "sm:order-1"
        }`}
      >
        <motion.div style={{ y, scale }} className="absolute -inset-[8%]">
          <ArtistArt seed={artist.seed} scrim={false} animated />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent sm:hidden" />
        <span
          className="pointer-events-none absolute -left-4 -top-10 select-none font-display text-[9rem] font-black leading-none text-transparent sm:text-[11rem]"
          style={{ WebkitTextStroke: "2px rgba(255,251,244,0.5)" }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div
        className={`relative order-2 flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 ${
          reversed ? "sm:order-1" : "sm:order-2"
        }`}
      >
        <span className="inline-flex w-fit items-center gap-2 bg-blue-tint px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue">
          {artist.genre}
        </span>
        <h3 className="mt-4 font-display text-6xl font-extrabold uppercase leading-[0.88] text-ink sm:text-7xl lg:text-8xl">
          {artist.name}
        </h3>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{artist.bio}</p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          {primaryUrl && (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor={primaryIsSpotify ? "LISTEN" : "FOLLOW"}
              className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-blue"
            >
              {primaryIsSpotify ? <SpotifyIcon className="h-4 w-4" /> : <InstagramIcon className="h-4 w-4" />}
              {primaryIsSpotify ? "Listen on Spotify" : "Follow on Instagram"}
            </a>
          )}
          {secondaryUrl && (
            <a
              href={secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="FOLLOW"
              aria-label={`${artist.name} on Instagram`}
              className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-blue hover:text-blue"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
