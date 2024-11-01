import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#4CAF4F",
        main: "#4D4D4D",
        gray: "#717171",
      },
      backgroundColor: {
        green: "#4CAF4F",
        hero: "#E0E0E0",
        silver: "#F5F7FA",
        footer: "#263238",
      },
    },
  },
  plugins: [],
};
export default config;
