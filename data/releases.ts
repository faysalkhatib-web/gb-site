// PLACEHOLDER DISCOGRAPHY — swap in your real releases.

export type Release = {
  slug: string;
  title: string;
  artistName: string;
  type: "Single" | "EP" | "Album";
  year: number;
  spotifyUrl?: string;
  seed: number;
  featured?: boolean;
};

export const releases: Release[] = [
  {
    slug: "marigold-hour-slow-gold",
    title: "Slow Gold",
    artistName: "Marigold Hour",
    type: "Album",
    year: 2026,
    spotifyUrl: "https://open.spotify.com/album/placeholder1",
    seed: 12,
    featured: true,
  },
  {
    slug: "coastal-static-low-tide",
    title: "Low Tide",
    artistName: "Coastal Static",
    type: "EP",
    year: 2026,
    spotifyUrl: "https://open.spotify.com/album/placeholder2",
    seed: 27,
    featured: true,
  },
  {
    slug: "junior-ravine-good-company",
    title: "Good Company",
    artistName: "Junior Ravine",
    type: "Single",
    year: 2025,
    spotifyUrl: "https://open.spotify.com/album/placeholder3",
    seed: 41,
    featured: true,
  },
  {
    slug: "paper-crown-porchlight",
    title: "Porchlight",
    artistName: "Paper Crown",
    type: "EP",
    year: 2025,
    spotifyUrl: "https://open.spotify.com/album/placeholder4",
    seed: 8,
    featured: true,
  },
  {
    slug: "the-low-fields-back-roads",
    title: "Back Roads",
    artistName: "The Low Fields",
    type: "Album",
    year: 2025,
    spotifyUrl: "https://open.spotify.com/album/placeholder5",
    seed: 33,
  },
  {
    slug: "hana-vess-plainspoken",
    title: "Plainspoken",
    artistName: "Hana Vess",
    type: "Single",
    year: 2025,
    spotifyUrl: "https://open.spotify.com/album/placeholder6",
    seed: 19,
  },
  {
    slug: "sunday-radio-long-drive",
    title: "Long Drive",
    artistName: "Sunday Radio",
    type: "Single",
    year: 2024,
    spotifyUrl: "https://open.spotify.com/album/placeholder7",
    seed: 54,
  },
  {
    slug: "little-arcade-neon-year",
    title: "Neon Year",
    artistName: "Little Arcade",
    type: "Album",
    year: 2024,
    spotifyUrl: "https://open.spotify.com/album/placeholder8",
    seed: 46,
  },
];

export const featuredReleases = releases.filter((r) => r.featured);
