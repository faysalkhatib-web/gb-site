import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFFBF4",
          deep: "#F3E8D3",
        },
        ink: {
          DEFAULT: "#2A241A",
          soft: "#5C5445",
        },
        blue: {
          DEFAULT: "#2955A6",
          dark: "#1E3F80",
          tint: "#EAF0FA",
        },
        orange: {
          DEFAULT: "#F4D68E",
          deep: "#E4BB5E",
          tint: "#FBF2DC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(42, 36, 26, 0.25)",
        lift: "0 24px 48px -20px rgba(42, 36, 26, 0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.12) translate(-2%, 2%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        drift: "drift 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
