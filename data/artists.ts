// PLACEHOLDER ROSTER — swap in your real artists, bios, and links.
// `seed` just drives the generated cover-art gradient (lib/generative.ts) so every
// tile looks distinct; pick any number, or leave as-is and it'll still look fine.

export type Artist = {
  slug: string;
  name: string;
  genre: string;
  bio: string;
  spotifyUrl?: string;
  instagramUrl?: string;
  seed: number;
  featured?: boolean;
};

export const artists: Artist[] = [
  {
    slug: "marigold-hour",
    name: "Marigold Hour",
    genre: "Indie Folk",
    bio: "Warm, unhurried songwriting built around close harmonies and a battered old Wurlitzer.",
    spotifyUrl: "https://open.spotify.com/artist/placeholder1",
    instagramUrl: "https://instagram.com/marigoldhourmusic",
    seed: 12,
    featured: true,
  },
  {
    slug: "coastal-static",
    name: "Coastal Static",
    genre: "Dream Pop",
    bio: "Reverb-soaked guitars and late-night vocals, recorded mostly with the windows open.",
    spotifyUrl: "https://open.spotify.com/artist/placeholder2",
    instagramUrl: "https://instagram.com/coastalstatic",
    seed: 27,
    featured: true,
  },
  {
    slug: "junior-ravine",
    name: "Junior Ravine",
    genre: "Alt R&B",
    bio: "Smooth, unhurried grooves with a live-band backbone and a real sense of humor.",
    spotifyUrl: "https://open.spotify.com/artist/placeholder3",
    instagramUrl: "https://instagram.com/juniorravine",
    seed: 41,
    featured: true,
  },
  {
    slug: "paper-crown",
    name: "Paper Crown",
    genre: "Bedroom Pop",
    bio: "Homemade production, big hooks, and lyrics that read like diary entries.",
    spotifyUrl: "https://open.spotify.com/artist/placeholder4",
    instagramUrl: "https://instagram.com/papercrownmusic",
    seed: 8,
  },
  {
    slug: "the-low-fields",
    name: "The Low Fields",
    genre: "Americana",
    bio: "A four-piece from way outside city limits, writing songs about staying put.",
    spotifyUrl: "https://open.spotify.com/artist/placeholder5",
    instagramUrl: "https://instagram.com/thelowfields",
    seed: 33,
  },
  {
    slug: "hana-vess",
    name: "Hana Vess",
    genre: "Singer-Songwriter",
    bio: "Plainspoken piano ballads with a voice that sounds like it's been through something.",
    spotifyUrl: "https://open.spotify.com/artist/placeholder6",
    instagramUrl: "https://instagram.com/hanavess",
    seed: 19,
  },
  {
    slug: "sunday-radio",
    name: "Sunday Radio",
    genre: "Soft Rock",
    bio: "Three friends chasing the sound of a car radio on a long summer drive.",
    spotifyUrl: "https://open.spotify.com/artist/placeholder7",
    instagramUrl: "https://instagram.com/sundayradioband",
    seed: 54,
  },
  {
    slug: "little-arcade",
    name: "Little Arcade",
    genre: "Synth Pop",
    bio: "Bright, generous pop songs built on vintage synths and bigger-than-life choruses.",
    spotifyUrl: "https://open.spotify.com/artist/placeholder8",
    instagramUrl: "https://instagram.com/littlearcademusic",
    seed: 46,
  },
];

export const featuredArtists = artists.filter((a) => a.featured);
