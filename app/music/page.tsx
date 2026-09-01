import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ReleaseCard } from "@/components/ReleaseCard";
import { Reveal } from "@/components/Reveal";
import { releases } from "@/data/releases";

export const metadata: Metadata = {
  title: "Music",
  description: "The full Good Boy Records catalog.",
};

export default function MusicPage() {
  return (
    <>
      <PageHero
        kicker="The Catalog"
        title="Every release, one shelf"
        copy="Singles, EPs, and albums from across the roster. Click any cover to listen on Spotify."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {releases.map((release, i) => (
              <Reveal key={release.slug} delay={(i % 4) * 0.06}>
                <ReleaseCard release={release} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
