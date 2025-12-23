/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F9F3EB',
          100: '#F0E2CC',
          200: '#E2C59A',
          300: '#D3A867',
          400: '#CB994C',
          500: '#C48B34',
          600: '#AC7A2E',
          700: '#936827',
          800: '#6C4C1D',
          900: '#4E3815',
        },
      },
    },
  },
  plugins: [],
}
