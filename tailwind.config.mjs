/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f2',
          100: '#f5ebe5',
          200: '#e8d3c5',
          300: '#dbb9a2',
          400: '#c99575',
          500: '#b87650',
          600: '#a66142',
          700: '#8a4d37',
          800: '#704132',
          900: '#5c372b',
        },
      },
    },
  },
  plugins: [],
}
