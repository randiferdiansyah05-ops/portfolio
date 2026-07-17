import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#0A0E14", // near-black navy background
          raised: "#10141C",  // card / surface
          overlay: "#161B25", // hover / elevated surface
        },
        border: {
          DEFAULT: "#1F2531",
          strong: "#2A3140",
        },
        ink: {
          DEFAULT: "#E7EAF1", // primary text
          muted: "#8B93A7",   // secondary text
          faint: "#5B6274",   // tertiary / disabled text
        },
        signal: {
          DEFAULT: "#4FD1C5", // teal accent — "signal", terminal cursor
          soft: "#2E5F5A",
          dim: "#173330",
        },
        amber: {
          DEFAULT: "#F2A65A", // in-progress / journey marker
          soft: "#3D2C1A",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(79,209,197,0.06), transparent 60%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
