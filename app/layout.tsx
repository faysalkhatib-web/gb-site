import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { site } from "@/data/site";

// Close free match for the bold, rounded grotesk in the "GOOD BOY" wordmark —
// swap for the exact brand font here if/when the license or font file is available.
// Used everywhere (both --font-sans and --font-display resolve to it) so the
// whole site carries the logo's bold, graphic energy instead of mixing in a serif.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Independent Record Label`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hankenGrotesk.variable}>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-ink">
        <CustomCursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
