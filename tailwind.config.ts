import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 1.33s linear infinite",
        "pulse-slowest": "pulse 1.66s linear infinite",
        "menu-open": "menuOpen 0.5s linear forwards",
        "menu-close": "menuClose 0.5s linear forwards",
      },
      keyframes: {
        menuOpen: {
          "0%": { left: "-500px" },
          "100%": { left: "0" },
        },
        menuClose: {
          "0%": { left: "0" },
          "100%": { left: "-500px" },
        },
      },
    },
  },
  plugins: [],
  darkMode: ["selector", '[data-mode="dark"]'],
};
export default config;
