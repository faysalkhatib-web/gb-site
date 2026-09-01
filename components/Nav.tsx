"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { merchNav, primaryNav, site } from "@/data/site";
import { CloseIcon, InstagramIcon, MenuIcon, SpotifyIcon } from "./icons";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-premium ${
          scrolled ? "bg-cream/90 shadow-soft backdrop-blur-md" : "bg-cream/60 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex">
            {primaryNav.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative py-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
                    active ? "text-blue" : "text-ink/80 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-blue transition-transform duration-300 ease-premium ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={merchNav.href}
              className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-orange-deep hover:shadow-soft"
            >
              {merchNav.label}
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:text-blue lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Rendered as a header sibling, not a descendant — a backdrop-blur ancestor
          would create a containing block that breaks this element's fixed positioning. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-cream px-6 pb-10 pt-[88px] lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {[...primaryNav, merchNav].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-ink/10 py-5 font-display text-3xl text-ink transition-colors duration-300 hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center gap-5 pt-8 text-ink">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="h-6 w-6 transition-colors duration-300 hover:text-blue" />
              </a>
              <a href={site.social.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <SpotifyIcon className="h-6 w-6 transition-colors duration-300 hover:text-blue" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
