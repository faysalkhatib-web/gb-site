import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ArtistCard } from "@/components/ArtistCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { artists } from "@/data/artists";

export const metadata: Metadata = {
  title: "Artists",
  description: "Meet the artists on Good Boy Records.",
};

export default function ArtistsPage() {
  return (
    <>
      <PageHero
        kicker="The Roster"
        title="Every artist on the label"
        copy="Click through to hear the music or follow along — every card links straight out to Spotify or Instagram."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
            {artists.map((artist, i) => (
              <Reveal key={artist.slug} delay={(i % 4) * 0.06}>
                <ArtistCard artist={artist} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream-deep/40 py-20">
        <div className="mx-auto max-w-content px-6 text-center sm:px-10">
          <p className="font-display text-3xl text-ink sm:text-4xl">Think you&rsquo;d fit in?</p>
          <p className="mx-auto mt-4 max-w-md text-base text-ink-soft">
            We&rsquo;re always listening. Send us your music and tell us a bit about you.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary" arrow>
              Submit your music
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
