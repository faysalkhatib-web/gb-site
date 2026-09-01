"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon } from "./icons";

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to a real email service (Mailchimp, Klaviyo, etc.)
    // before launch — right now this only updates local UI state.
    setStatus("submitted");
    setEmail("");
  };

  if (status === "submitted") {
    return (
      <p className={`text-sm font-medium ${dark ? "text-cream" : "text-ink"}`}>
        You&rsquo;re on the list — welcome to the family.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        aria-label="Email address"
        className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors duration-300 ease-premium placeholder:text-current/40 focus:border-blue ${
          dark
            ? "border-cream/25 bg-transparent text-cream"
            : "border-ink/15 bg-cream text-ink"
        }`}
      />
      <button
        type="submit"
        aria-label="Join the newsletter"
        className={`group flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-soft ${
          dark ? "bg-cream text-ink" : "bg-blue text-cream"
        }`}
      >
        <ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
