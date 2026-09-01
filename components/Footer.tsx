import Link from "next/link";
import { Logo } from "./Logo";
import { primaryNav, site } from "@/data/site";
import { InstagramIcon, MailIcon, SpotifyIcon, TikTokIcon } from "./icons";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">{site.tagline}</p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-orange hover:text-orange"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-orange hover:text-orange"
              >
                <SpotifyIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-orange hover:text-orange"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">Explore</p>
            <ul className="mt-5 space-y-3">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors duration-300 hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">Get in touch</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-orange"
                >
                  <MailIcon className="h-4 w-4" />
                  {site.email}
                </a>
              </li>
              <li className="text-cream/60">{site.address}</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">Join the community</p>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              New releases, merch drops, and shows in your inbox — no noise, we promise.
            </p>
            <div className="mt-5">
              <NewsletterForm dark />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Made with care for the roster.</p>
        </div>
      </div>
    </footer>
  );
}
