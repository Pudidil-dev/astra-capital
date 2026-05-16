import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand canvas (warm cream, paper-like)
        canvas: "#F3EBDD",
        "surface-card": "#FFFFFF",
        "surface-card-alt": "#FAFAF7",

        // Editorial typography
        ink: "#090909",
        "ink-muted": "#737373",

        // Editorial accents
        "accent-brown": "#4A3028",
        "accent-taupe": "#9B8B7E",
        "accent-blue-grey": "#A8B5C2",
        "accent-ocean": "#06394A",
        "accent-ocean-2": "#0E5A6B",

        // Functional
        "border-soft": "rgba(9,9,9,0.08)",
        "border-faint": "rgba(9,9,9,0.05)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display (hero)
        "display-lg": [
          "72px",
          { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "300" },
        ],
        "display-md": [
          "56px",
          { lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "300" },
        ],
        "display-sm": [
          "44px",
          { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "300" },
        ],

        // Headlines
        "headline-lg": [
          "40px",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        "headline-md": [
          "32px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        "headline-sm": [
          "24px",
          { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "500" },
        ],

        // Body
        "body-lg": [
          "16px",
          { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" },
        ],
        "body-sm": [
          "13px",
          { lineHeight: "1.6", letterSpacing: "0.01em", fontWeight: "400" },
        ],

        // Caps label / overline
        "label-caps": [
          "11px",
          { lineHeight: "1.0", letterSpacing: "0.14em", fontWeight: "600" },
        ],
        "label-caps-sm": [
          "10px",
          { lineHeight: "1.0", letterSpacing: "0.14em", fontWeight: "600" },
        ],
      },
      borderRadius: {
        // Section radii
        "card-sm": "16px",
        card: "24px",
        "card-lg": "32px",
        "card-xl": "36px",
      },
      maxWidth: {
        editorial: "1320px",
      },
      spacing: {
        "section-gap-sm": "96px",
        "section-gap": "120px",
        "section-gap-lg": "160px",
      },
      boxShadow: {
        ambient:
          "0 1px 2px rgba(74,48,40,0.04), 0 30px 60px -30px rgba(74,48,40,0.18)",
        "ambient-sm":
          "0 1px 2px rgba(74,48,40,0.05), 0 10px 30px -15px rgba(74,48,40,0.12)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
