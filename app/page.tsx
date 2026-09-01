import { ArtistGallery } from "@/components/ArtistGallery";
import { ArtistArt } from "@/components/ArtistArt";
import { ArtistSpotlight } from "@/components/ArtistSpotlight";
import { Button } from "@/components/Button";
import { Magnetic } from "@/components/Magnetic";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { ReleaseCard } from "@/components/ReleaseCard";
import { ScrambleReveal } from "@/components/ScrambleReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { artists, featuredArtists } from "@/data/artists";
import { featuredReleases } from "@/data/releases";
import { site } from "@/data/site";

const tickerItems = [
  `${site.shortName} Records`,
  ...Array.from(new Set(artists.map((a) => a.genre))),
];

const pillars = [
  {
    number: "01",
    title: "Artist-first, always",
    copy: "Fair splits, real creative control, and a team that actually picks up the phone.",
  },
  {
    number: "02",
    title: "A real community",
    copy: "Our artists get on each other's releases, trade fans, and show up to each other's shows.",
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
      <section className="relative overflow-hidden bg-blue pb-0 pt-28 text-cream sm:pt-36">
        <div className="pointer-events-none absolute -right-16 -top-16 h-[26rem] w-[26rem] overflow-hidden rounded-full opacity-90 sm:-right-4 sm:top-6 lg:h-[32rem] lg:w-[32rem]">
          <ArtistArt seed={71} scrim={false} animated />
        </div>

        <div className="relative mx-auto max-w-content px-6 sm:px-10">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-cream/70">
            Independent Record Label
          </p>
          <h1 className="font-display font-black uppercase leading-[0.86]">
            <ScrambleReveal text="Good songs." className="block text-7xl sm:text-8xl lg:text-[8.5rem]" />
            <ScrambleReveal
              text="Good people."
              delay={120}
              className="block text-7xl sm:text-8xl lg:text-[8.5rem]"
            />
            <ScrambleReveal
              text="Good boy."
              delay={240}
              className="block text-7xl text-orange sm:text-8xl lg:text-[8.5rem]"
            />
          </h1>

          <div className="relative z-10 mt-10 flex flex-wrap items-end justify-between gap-8 sm:mt-14">
            <p className="max-w-md text-lg leading-relaxed text-cream/80">{site.description}</p>
            <div className="flex flex-wrap gap-4">
              <Magnetic>
                <Button href="#artists" variant="soft" arrow>
                  Meet the roster
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/merch" variant="outline-light">
                  Shop merch
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>

        <div className="relative mt-16 border-y border-cream/15 bg-ink py-4 sm:mt-20">
          <Marquee
            items={tickerItems}
            textClassName="font-display text-2xl font-extrabold uppercase text-cream sm:text-3xl"
          />
        </div>
      </section>

      <section id="artists" className="scroll-mt-24 bg-cream">
        {featuredArtists.map((artist, i) => (
          <ArtistSpotlight key={artist.slug} artist={artist} index={i} />
        ))}
      </section>

      <div className="bg-orange py-4 text-ink">
        <Marquee
          items={["Community over competition", "Independent & artist-first", "Good Boy Records"]}
          textClassName="font-display text-xl font-extrabold uppercase sm:text-2xl"
        />
      </div>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue">Full Roster</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold uppercase text-ink sm:text-5xl">
                Browse everyone
              </h2>
            </div>
            <Button href="/artists" variant="ghost" arrow>
              View all artists
            </Button>
          </div>
        </div>
        <div className="mt-12">
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
                  <p
                    className="font-display text-5xl font-black text-transparent transition-transform duration-500 ease-premium group-hover:-translate-y-1"
                    style={{ WebkitTextStroke: "1.5px #E4BB5E" }}
                  >
                    {pillar.number}
                  </p>
                  <p className="mt-3 font-display text-xl font-extrabold uppercase text-ink">{pillar.title}</p>
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
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-orange">Good Boy Merch</p>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              Wear the label,
              <br /> not just play it.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75">
              Small-batch apparel, vinyl, and ephemera designed alongside the artists — printed in limited runs
              and restocked rarely.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetic>
                <Button href="/merch" variant="soft" arrow>
                  Shop the collection
                </Button>
              </Magnetic>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative aspect-[3/4] translate-y-6 overflow-hidden shadow-lift transition-transform duration-500 ease-premium hover:-translate-y-1">
                <ArtistArt seed={19} scrim={false} animated />
              </div>
              <div className="group relative aspect-[3/4] -translate-y-6 overflow-hidden shadow-lift transition-transform duration-500 ease-premium hover:-translate-y-1">
                <ArtistArt seed={44} scrim={false} animated />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
