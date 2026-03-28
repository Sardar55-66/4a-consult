import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        dark: "#1f2523",
        accent: "#f9b233",
        danger: "#ff3b30",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      screens: {
        mobile: { max: "720px" },
      },
    },
  },
  plugins: [],
};

export default config;
