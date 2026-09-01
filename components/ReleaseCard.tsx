import type { Release } from "@/data/releases";
import { ArtistArt } from "./ArtistArt";
import { SpotifyIcon } from "./icons";

export function ReleaseCard({ release, className = "" }: { release: Release; className?: string }) {
  return (
    <div className={`group relative ${className}`}>
      <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft transition-shadow duration-500 ease-premium group-hover:shadow-lift">
        <div className="absolute inset-0 transition-transform duration-700 ease-premium group-hover:scale-[1.08]">
          <ArtistArt seed={release.seed} scrim={false} />
        </div>
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 ease-premium group-hover:bg-ink/25" />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur">
          {release.type}
        </span>
        {release.spotifyUrl && (
          <a
            href={release.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${release.title} by ${release.artistName} on Spotify`}
            className="absolute inset-0 flex items-end justify-end p-4"
          >
            <span className="flex h-10 w-10 translate-y-2 scale-90 items-center justify-center rounded-full bg-blue text-cream opacity-0 transition-all duration-400 ease-premium group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              <SpotifyIcon className="h-5 w-5" />
            </span>
          </a>
        )}
      </div>
      <div className="mt-4">
        <p className="font-display text-lg text-ink">{release.title}</p>
        <p className="mt-0.5 text-sm text-ink-soft">
          {release.artistName} · {release.year}
        </p>
      </div>
    </div>
  );
}
