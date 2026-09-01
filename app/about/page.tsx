import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ArtistArt } from "@/components/ArtistArt";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "The story and values behind Good Boy Records.",
};

const values = [
  {
    title: "We sign people, not just songs",
    copy: "A great single is a start, not the whole pitch. We're looking for artists we want to work with for years, not one cycle.",
  },
  {
    title: "Community over competition",
    copy: "Our artists get on each other's releases, trade fans, and show up to each other's shows. That's the whole model.",
  },
  {
    title: "Small enough to care",
    copy: "We'd rather do right by a dozen artists than spread thin across a hundred.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About the Label"
        title="A label that still feels like a living room"
        copy="Good Boy Records is an independent label built around a simple idea: take care of a small roster, really well, and let the community do the rest."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-content items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">How it started</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              A few friends, a shared drive full of rough mixes
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Good Boy Records started the way most good things do — informally. A group of friends kept
                trading unfinished songs back and forth, offering notes, and eventually asking why they
                weren&rsquo;t just releasing this stuff properly.
              </p>
              <p>
                That small, hands-on feeling is still the whole point. We keep the roster deliberately small
                so every release gets real attention — a proper campaign, a team that knows the songs by
                heart, and a community of labelmates rooting for it.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/artists" variant="ghost" arrow>
                Meet the artists
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-6 grid-rows-6 gap-4">
              <div className="relative col-span-4 row-span-4 overflow-hidden rounded-2xl shadow-lift">
                <ArtistArt seed={37} scrim={false} />
              </div>
              <div className="relative col-span-2 col-start-5 row-span-3 overflow-hidden rounded-2xl shadow-soft">
                <ArtistArt seed={58} scrim={false} />
              </div>
              <div className="relative col-span-2 col-start-5 row-span-3 row-start-4 overflow-hidden rounded-2xl shadow-soft">
                <ArtistArt seed={4} scrim={false} />
              </div>
              <div className="relative col-span-4 row-span-2 row-start-5 overflow-hidden rounded-2xl shadow-soft">
                <ArtistArt seed={22} scrim={false} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep/40 py-20 sm:py-28">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <Reveal>
            <SectionHeading align="center" kicker="What We Believe" title="How we work" className="mx-auto" />
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-cream p-7 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-blue/30 hover:shadow-soft">
                  <p className="font-display text-lg text-ink">{value.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-content px-6 text-center sm:px-10">
          <Reveal>
            <p className="font-display text-3xl text-ink sm:text-4xl">Want in?</p>
            <p className="mx-auto mt-4 max-w-md text-base text-ink-soft">
              We&rsquo;re always listening for the next addition to the family. Reach out — we read
              everything.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" arrow>
                Get in touch
              </Button>
              <Button href={`mailto:${site.demoEmail}`} variant="secondary">
                Send a demo
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
