/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F9F3EB",
          100: "#F0E2CC",
          200: "#E2C59A",
          300: "#D3A867",
          400: "#CB994C",
          500: "#C48B34",
          600: "#AC7A2E",
          700: "#936827",
          800: "#6C4C1D",
          900: "#4E3815",
        },
        secondary: {
          200: "#BFAEE3",
          300: "#AD9DD8",
          400: "#9F8FCA",
          500: "#937FC0",
          600: "#8E7AD1",
          700: "#7A6AB3",
          800: "#6B4FC0",
        },
        tertiary: {
          200: "#D9BFA8",
          300: "#CFA890",
          400: "#89532F",
          500: "#7A4423",
          600: "#70421F",
          700: "#5C361A",
          800: "#4E3815",
        },
      },
      fontFamily: {
        sans: [
          "Quicksand",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        display: ["Gruppo", "Quicksand", "sans-serif"]
      },
    },
  },
  plugins: [],
};
