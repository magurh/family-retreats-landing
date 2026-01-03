import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "hsl(var(--sand) / <alpha-value>)",
        oat: "hsl(var(--oat) / <alpha-value>)",
        clay: "hsl(var(--clay) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        sage: "hsl(var(--sage) / <alpha-value>)",
        olive: "hsl(var(--olive) / <alpha-value>)",
        blue: "hsl(var(--dusty-blue) / <alpha-value>)",
        terracotta: "hsl(var(--terracotta) / <alpha-value>)",
        honey: "hsl(var(--honey) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 14px 40px rgba(0, 0, 0, 0.35)",
        softer: "0 10px 28px rgba(0, 0, 0, 0.25)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
