const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F1ED',
          100: '#EBE3DB',
          200: '#D8C8B4', // Driftwood Beige / Sand
          300: '#C5AD8D',
          400: '#B29266',
          500: '#CE674E', // Soft Rust / Coral
          600: '#B85A43',
          700: '#A24D38',
          800: '#8C402D',
          900: '#763322',
        },
        secondary: {
          50: '#E8EBEA',
          100: '#D1D7D5',
          200: '#A3AFA9',
          300: '#75877D',
          400: '#475F51',
          500: '#2A3A34', // Muted Pine Green
          600: '#222E29',
          700: '#1A231E',
          800: '#111714',
          900: '#090C0A',
        },
        dark: {
          DEFAULT: '#222222', // Deep Charcoal
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#444444',
          500: '#222222',
          600: '#1B1B1B',
          700: '#141414',
          800: '#0D0D0D',
          900: '#070707',
        },
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
