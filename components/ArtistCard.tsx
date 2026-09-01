import type { Artist } from "@/data/artists";
import { ArtistArt } from "./ArtistArt";
import { InstagramIcon, SpotifyIcon } from "./icons";

export function ArtistCard({ artist, className = "" }: { artist: Artist; className?: string }) {
  const primaryIsSpotify = Boolean(artist.spotifyUrl);
  const primaryUrl = artist.spotifyUrl ?? artist.instagramUrl;
  const secondaryUrl = primaryIsSpotify ? artist.instagramUrl : undefined;

  if (!primaryUrl) return null;

  return (
    <div className={`group relative ${className}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-soft transition-shadow duration-500 ease-premium group-hover:shadow-lift">
        <div className="absolute inset-0 transition-transform duration-700 ease-premium group-hover:scale-[1.08]">
          <ArtistArt seed={artist.seed} />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="font-display text-xl text-cream sm:text-2xl">{artist.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/70">{artist.genre}</p>
          <p className="mt-3 flex translate-y-1 items-center gap-1.5 text-xs font-medium text-cream opacity-0 transition-all duration-400 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
            {primaryIsSpotify ? (
              <SpotifyIcon className="h-3.5 w-3.5" />
            ) : (
              <InstagramIcon className="h-3.5 w-3.5" />
            )}
            {primaryIsSpotify ? "Listen on Spotify" : "Follow on Instagram"}
            <span aria-hidden="true">↗</span>
          </p>
        </div>

        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
          aria-label={`${artist.name} on ${primaryIsSpotify ? "Spotify" : "Instagram"}`}
        />

        {secondaryUrl && (
          <a
            href={secondaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${artist.name} on Instagram`}
            className="absolute right-4 top-4 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 backdrop-blur transition-all duration-400 ease-premium hover:bg-cream group-hover:translate-y-0 group-hover:opacity-100"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
