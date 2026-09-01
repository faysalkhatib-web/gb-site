import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ArtistArt } from "@/components/ArtistArt";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Merch",
  description: "Good Boy Records merch — apparel, vinyl, and limited drops.",
};

// Collection handles assume your Shopify collections use matching URL handles
// (yourstore.com/collections/apparel, etc). Adjust if yours differ.
const collections = [
  {
    name: "Apparel",
    handle: "apparel",
    copy: "Tees, hoodies, and crewnecks in soft, pre-washed cotton.",
    seed: 5,
  },
  {
    name: "Headwear",
    handle: "headwear",
    copy: "Caps and beanies with quiet, low-key branding.",
    seed: 63,
  },
  {
    name: "Vinyl & Ephemera",
    handle: "vinyl-ephemera",
    copy: "Test pressings, posters, and one-off print runs.",
    seed: 28,
  },
  {
    name: "Limited Drops",
    handle: "limited-drops",
    copy: "Small-batch collabs with the artists — gone when they're gone.",
    seed: 44,
  },
];

export default function MerchPage() {
  return (
    <>
      <PageHero
        kicker="Good Boy Merch"
        title="Wear the label"
        copy="Small-batch apparel, vinyl, and ephemera designed alongside the artists. Everything ships from our Shopify store."
      >
        <div className="mt-9">
          <Button href={site.shopifyUrl} variant="primary" external arrow>
            Shop the full collection
          </Button>
        </div>
      </PageHero>

      <section className="pb-24">
        <div className="mx-auto max-w-content px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {collections.map((collection, i) => (
              <Reveal key={collection.handle} delay={i * 0.08}>
                <a
                  href={`${site.shopifyUrl}/collections/${collection.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="SHOP"
                  className="group relative block aspect-[4/3] overflow-hidden shadow-soft transition-shadow duration-500 ease-premium hover:shadow-lift"
                >
                  <div className="absolute inset-0 transition-transform duration-700 ease-premium group-hover:scale-[1.06]">
                    <ArtistArt seed={collection.seed} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="font-display text-2xl font-extrabold uppercase text-cream sm:text-3xl">
                      {collection.name}
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/75">{collection.copy}</p>
                    <p className="mt-4 flex translate-y-1 items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-cream opacity-0 transition-all duration-400 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
                      Shop now <span aria-hidden="true">↗</span>
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue py-20 text-cream sm:py-24">
        <div className="mx-auto max-w-content px-6 text-center sm:px-10">
          <Reveal>
            <p className="font-display text-3xl font-black uppercase sm:text-4xl">
              New drops don&rsquo;t last long around here.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm text-cream/75">
              Join the newsletter to hear about restocks and limited runs before they&rsquo;re gone.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={site.shopifyUrl} variant="soft" external arrow>
                Visit the shop
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
