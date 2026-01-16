import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        }
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
      }
    },
  },
  plugins: [],
} satisfies Config;
