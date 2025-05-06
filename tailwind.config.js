const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F7F6',  // Lightest sand
          100: '#E8E4D9', // Soft sand
          200: '#D8C8B4', // Driftwood Beige / Sand
          300: '#C5B8A3', // Warm sand
          400: '#B2A892', // Aged driftwood
          500: '#4A90E2', // Ocean blue
          600: '#357ABD', // Deep ocean
          700: '#2A5F9E', // Deep sea
          800: '#1E457F', // Dark ocean
          900: '#122B60', // Midnight sea
        },
        secondary: {
          50: '#F0F7F4',  // Sea foam
          100: '#E1EFE9', // Light sea foam
          200: '#C3DFD3', // Pale aqua
          300: '#A5CFBD', // Seafoam green
          400: '#87BFA7', // Coastal green
          500: '#69AF91', // Sea green
          600: '#4B9F7B', // Deep sea green
          700: '#2D8F6B', // Forest green
          800: '#0F7F5B', // Deep forest
          900: '#006F4B', // Dark forest
        },
        dark: {
          DEFAULT: '#2C3E50', // Deep ocean blue
          50: '#ECF0F1',  // Light mist
          100: '#D9E2E3', // Morning mist
          200: '#B3C5C7', // Coastal fog
          300: '#8DA8AB', // Ocean mist
          400: '#678B8F', // Deep mist
          500: '#2C3E50', // Deep ocean blue
          600: '#243342', // Night ocean
          700: '#1C2834', // Deep night
          800: '#141D26', // Midnight
          900: '#0C1218', // Darkest night
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
