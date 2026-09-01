// Central place for site-wide config and links.
// Everything marked PLACEHOLDER should be swapped for the real thing before launch.

export const site = {
  name: "Good Boy Records",
  shortName: "Good Boy",
  tagline: "An independent label built on good songs and good people.",
  description:
    "Good Boy Records is an independent record label — a small, close-knit roster and a community that shows up for each other's releases.",

  // PLACEHOLDER — replace with your real Shopify storefront URL.
  shopifyUrl: "https://good-boy-records.myshopify.com",

  // PLACEHOLDER — replace with real contact addresses.
  email: "hello@goodboyrecords.com",
  demoEmail: "demos@goodboyrecords.com",

  // PLACEHOLDER — replace with your real label-wide social profiles.
  social: {
    instagram: "https://instagram.com/goodboyrecords",
    spotify: "https://open.spotify.com/playlist/goodboyrecords",
    tiktok: "https://tiktok.com/@goodboyrecords",
  },

  address: "Los Angeles, CA",
} as const;

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryNav: NavLink[] = [
  { label: "Artists", href: "/artists" },
  { label: "Music", href: "/music" },
  { label: "Merch", href: "/merch" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const merchNav: NavLink = { label: "Shop the merch", href: "/merch" };
