import { ArtistGallery } from "@/components/ArtistGallery";
import { ArtistArt } from "@/components/ArtistArt";
import { Button } from "@/components/Button";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal } from "@/components/Reveal";
import { ReleaseCard } from "@/components/ReleaseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { artists } from "@/data/artists";
import { featuredReleases } from "@/data/releases";
import { site } from "@/data/site";

const pillars = [
  {
    number: "01",
    title: "Artist-first, always",
    copy: "Fair splits, real creative control, and a team that actually picks up the phone.",
  },
  {
    number: "02",
    title: "A real community",
    copy: "Our artists share stages, playlists, and each other's fans — not just a logo on a page.",
  },
  {
    number: "03",
    title: "Boutique attention",
    copy: "No one gets left on autopilot. Every release gets a real campaign behind it.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-24 sm:pt-32">
        <div
          className="pointer-events-none absolute -right-40 -top-32 h-[28rem] w-[28rem] rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(circle, #F4D68E 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 top-64 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #2955A6 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-content px-6 sm:px-10">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-blue">
              Independent Record Label
            </p>
            <h1 className="max-w-3xl font-display text-6xl leading-[1.02] text-ink sm:text-7xl lg:text-8xl">
              Good songs.
              <br /> Good people.
              <br />
              <span className="italic text-blue">Good boy.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-soft">{site.description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#artists" variant="primary" arrow>
                Meet the roster
              </Button>
              <Button href="/merch" variant="secondary">
                Shop merch
              </Button>
            </div>
          </Reveal>
        </div>
        <div className="relative mx-auto mt-24 flex max-w-content justify-center px-6 sm:px-10">
          <div className="flex flex-col items-center gap-2 text-ink/40">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
            <span className="h-8 w-px animate-bounce bg-ink/30" />
          </div>
        </div>
      </section>

      <section id="artists" className="scroll-mt-24 bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              kicker="The Roster"
              title="Artists on the label"
              copy="A small, deliberately-curated roster — every one of them a phone call away. Tap through to hear the songs or follow along."
            >
              <Button href="/artists" variant="ghost" arrow>
                View all artists
              </Button>
            </SectionHeading>
          </Reveal>
        </div>
        <div className="mt-14">
          <ArtistGallery artists={artists} />
        </div>
      </section>

      <section className="bg-cream-deep/40 py-20 sm:py-28">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              kicker="Fresh Off The Press"
              title="Latest releases"
              copy="New music from around the roster — press play, or click through to save it on Spotify."
            >
              <Button href="/music" variant="ghost" arrow>
                Browse the catalog
              </Button>
            </SectionHeading>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {featuredReleases.map((release, i) => (
              <Reveal key={release.slug} delay={i * 0.08}>
                <ReleaseCard release={release} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              align="center"
              kicker="The Label"
              title="Built on good people, not just good numbers"
              copy="Good Boy Records started as a handful of friends trading rough mixes. The roster's grown, but the way we work hasn't changed much."
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.number} delay={i * 0.1}>
                <div className="group">
                  <p className="font-display text-3xl text-orange-deep transition-transform duration-500 ease-premium group-hover:-translate-y-1">
                    {pillar.number}
                  </p>
                  <p className="mt-3 font-display text-xl text-ink">{pillar.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pillar.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-14 text-center">
            <Button href="/about" variant="ghost" arrow className="mx-auto">
              More about the label
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue py-20 text-cream sm:py-28">
        <div className="mx-auto grid max-w-content items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-orange">Good Boy Merch</p>
            <h2 className="font-display text-4xl italic leading-[1.05] sm:text-5xl lg:text-6xl">
              Wear the label,
              <br /> not just play it.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75">
              Small-batch apparel, vinyl, and ephemera designed alongside the artists — printed in limited runs
              and restocked rarely.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/merch" variant="soft" arrow>
                Shop the collection
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative aspect-[3/4] translate-y-6 overflow-hidden rounded-2xl shadow-lift transition-transform duration-500 ease-premium hover:-translate-y-1">
                <ArtistArt seed={71} scrim={false} />
              </div>
              <div className="group relative aspect-[3/4] -translate-y-6 overflow-hidden rounded-2xl shadow-lift transition-transform duration-500 ease-premium hover:-translate-y-1">
                <ArtistArt seed={19} scrim={false} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue">Join the Family</p>
            <h2 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
              Get the good stuff first
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              New releases, merch drops, and the occasional living-room show — straight to your inbox.
            </p>
            <div className="mt-8 flex justify-center">
              <NewsletterForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
