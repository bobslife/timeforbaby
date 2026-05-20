import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        baby: {
          dark: "#151515",
          panel: "#2f2f2d",
          panelSoft: "#333331",
          hero: "#fff3f1",
          pink: "#ef7f93",
          blush: "#f19aaa",
          text: "#ffffff",
          muted: "#d7d7d7"
        }
      },
      boxShadow: {
        baby: "0 18px 45px rgba(0, 0, 0, 0.3)",
        pink: "0 16px 34px rgba(239, 127, 147, 0.22)"
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
