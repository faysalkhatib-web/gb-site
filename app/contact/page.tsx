import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { MailIcon, InstagramIcon, SpotifyIcon } from "@/components/icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Good Boy Records.",
};

const demoChecklist = [
  "Links to 2–3 songs that best represent you right now",
  "A short bio — who you are and where you're from",
  "Any upcoming shows or releases we should know about",
  "Links to your socials and streaming profiles",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's talk"
        copy="Whether it's a question, a demo, or just to say hi — we read everything ourselves."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-content gap-6 px-6 sm:grid-cols-2 sm:px-10">
          <Reveal>
            <div className="group h-full rounded-[1.75rem] border border-ink/10 bg-cream p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-blue/30 hover:shadow-soft sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-tint text-blue">
                <MailIcon className="h-5 w-5" />
              </span>
              <p className="mt-6 font-display text-2xl font-extrabold uppercase text-ink">General inquiries</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Press, partnerships, questions — anything that isn&rsquo;t a demo.
              </p>
              <div className="mt-6">
                <Button href={`mailto:${site.email}`} variant="ghost" arrow>
                  {site.email}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group h-full rounded-[1.75rem] border border-ink/10 bg-cream p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-blue/30 hover:shadow-soft sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-tint text-orange-deep">
                <SpotifyIcon className="h-5 w-5" />
              </span>
              <p className="mt-6 font-display text-2xl font-extrabold uppercase text-ink">Submit a demo</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                We listen to everything that comes in. Here&rsquo;s what helps:
              </p>
              <ul className="mt-5 space-y-2.5">
                {demoChecklist.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-ink-soft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-deep" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={`mailto:${site.demoEmail}`} variant="ghost" arrow>
                  {site.demoEmail}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-6 max-w-content px-6 sm:px-10">
          <div className="flex flex-col items-center gap-6 rounded-[1.75rem] bg-ink px-8 py-10 text-center text-cream sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-xl font-extrabold uppercase">Find us elsewhere</p>
              <p className="mt-1 text-sm text-cream/70">{site.address}</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-orange hover:text-orange"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-orange hover:text-orange"
              >
                <SpotifyIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
