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
        soft: "0 10px 30px rgba(36, 30, 24, 0.08)",
        softer: "0 8px 24px rgba(36, 30, 24, 0.06)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
