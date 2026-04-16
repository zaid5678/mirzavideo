import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ink: "#000000",
      paper: "#F5F4F0",
      grey: "#6B6B6B",
      "grey-light": "#E5E4DF",
      white: "#ffffff",
      transparent: "transparent",
    },
    fontFamily: {
      serif: ["var(--font-instrument-serif)", "serif"],
      sans: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      letterSpacing: {
        widest: "0.2em",
        "ultra-wide": "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
