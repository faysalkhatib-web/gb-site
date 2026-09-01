import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">404</p>
      <h1 className="mt-4 font-display text-5xl text-ink sm:text-6xl">Off the label.</h1>
      <p className="mt-4 max-w-sm text-base text-ink-soft">
        This page wandered off. Let&rsquo;s get you back to the music.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary" arrow>
          Back to home
        </Button>
      </div>
    </section>
  );
}
