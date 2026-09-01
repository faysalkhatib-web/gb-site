"use client";

import { useEffect, useRef, useState } from "react";
import type { Artist } from "@/data/artists";
import { ArtistCard } from "./ArtistCard";
import { ArrowIcon } from "./icons";

export function ArtistGallery({ artists }: { artists: Artist[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const dragState = useRef({ dragging: false, startX: 0, startScroll: 0 });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const updateProgress = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    updateProgress();

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("scroll", updateProgress, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", updateProgress);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollerRef.current;
    if (!el) return;
    dragState.current = { dragging: true, startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || !dragState.current.dragging) return;
    el.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX);
  };

  const endDrag = () => {
    dragState.current.dragging = false;
  };

  const scrollByAmount = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 480) * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Scroll artists left"
          onClick={() => scrollByAmount(-1)}
          disabled={progress <= 0.02}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-blue hover:text-blue disabled:pointer-events-none disabled:opacity-30"
        >
          <ArrowIcon className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Scroll artists right"
          onClick={() => scrollByAmount(1)}
          disabled={progress >= 0.98}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-blue hover:text-blue disabled:pointer-events-none disabled:opacity-30"
        >
          <ArrowIcon className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 pl-6 pr-6 sm:pl-10 sm:pr-10 lg:pl-[calc((100vw-1440px)/2+2.5rem)] lg:pr-10 [cursor:grab] active:[cursor:grabbing]"
      >
        {artists.map((artist) => (
          <ArtistCard
            key={artist.slug}
            artist={artist}
            className="w-[72vw] shrink-0 snap-start sm:w-[44vw] lg:w-[24vw]"
          />
        ))}
      </div>

      <div className="mx-6 mt-2 h-px overflow-hidden rounded-full bg-ink/10 sm:mx-10 lg:mx-10">
        <div
          className="h-full bg-blue transition-[width] duration-150 ease-out"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
