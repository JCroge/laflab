import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0b0f1a",
        graphite: "#101623",
        neon: "#7de3ff",
        gold: "#c9a15a",
        slate: "#9aa5b1",
        mist: "#e2e8f0"
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        sans: [
          "var(--font-noto)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        glass: "0 20px 60px rgba(15, 23, 42, 0.35)",
        glow: "0 0 40px rgba(125, 227, 255, 0.25)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(125,227,255,0.2), transparent 45%)",
        "hero-radial-2": "radial-gradient(circle at 80% 10%, rgba(201,161,90,0.18), transparent 40%)",
        "grid": "linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
