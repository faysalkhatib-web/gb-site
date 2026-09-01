"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { merchNav, primaryNav, site } from "@/data/site";
import { CloseIcon, InstagramIcon, MenuIcon, PlusIcon, SpotifyIcon } from "./icons";
import { NewsletterForm } from "./NewsletterForm";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setPanelOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!panelOpen) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setPanelOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [panelOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-premium ${
          scrolled ? "bg-cream/90 shadow-soft backdrop-blur-md" : "bg-cream/60 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
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

          <div className="flex items-center gap-3">
            <div ref={panelRef} className="relative hidden lg:block">
              <button
                type="button"
                aria-expanded={panelOpen}
                aria-label={panelOpen ? "Close quick menu" : "Open quick menu"}
                onClick={() => setPanelOpen((v) => !v)}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-soft ${
                  panelOpen ? "bg-ink text-cream" : "bg-blue text-cream hover:bg-blue-dark"
                }`}
              >
                <PlusIcon className={`h-4 w-4 transition-transform duration-300 ease-premium ${panelOpen ? "rotate-45" : ""}`} />
              </button>

              <AnimatePresence>
                {panelOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-full mt-3 w-80 rounded-3xl border border-ink/10 bg-cream p-6 shadow-lift"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">Good Boy Shop</p>
                    <Link
                      href={merchNav.href}
                      className="group mt-3 flex items-center justify-between rounded-2xl bg-orange px-5 py-4 text-sm font-semibold text-ink transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-orange-deep"
                    >
                      {merchNav.label}
                      <span aria-hidden="true" className="transition-transform duration-300 ease-premium group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    <div className="mt-6 border-t border-ink/10 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">Stay in the loop</p>
                      <p className="mt-2 text-sm text-ink-soft">Releases and drops, straight to your inbox.</p>
                      <div className="mt-4">
                        <NewsletterForm />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-cream px-6 pb-10 pt-[88px] lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {primaryNav.map((link, i) => (
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

            <div className="mt-10 rounded-3xl bg-blue-tint p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Stay in the loop</p>
              <p className="mt-2 text-sm text-ink-soft">Releases and drops, straight to your inbox.</p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>

            <div className="mt-auto flex items-center gap-5 pt-8 text-ink">
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
