import { generativeArt } from "@/lib/generative";

export function ArtistArt({
  seed,
  scrim = true,
  animated = false,
  className = "",
}: {
  seed: number;
  scrim?: boolean;
  animated?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${animated ? "animate-drift" : ""} ${className}`}
      style={generativeArt(seed)}
    >
      <div className="grain absolute inset-0" aria-hidden="true" />
      {scrim && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
