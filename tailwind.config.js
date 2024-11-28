/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B365D',
          50: '#E9EDF2',
          100: '#D3DBE6',
          200: '#A7B8CC',
          300: '#7B94B3',
          400: '#4F7199',
          500: '#1B365D',
          600: '#162C4A',
          700: '#112238',
          800: '#0B1725',
          900: '#060B13'
        },
        accent: {
          DEFAULT: '#A94442',
          50: '#F7EBEB',
          100: '#EFD7D6',
          200: '#DFAFAE',
          300: '#CF8785',
          400: '#BF5F5D',
          500: '#A94442',
          600: '#873635',
          700: '#652828',
          800: '#431B1A',
          900: '#220D0D'
        },
        neutral: {
          DEFAULT: '#A8A9AD',
          50: '#F8F8F8',
          100: '#F1F1F2',
          200: '#E3E3E5',
          300: '#D5D6D8',
          400: '#C7C8CB',
          500: '#A8A9AD',
          600: '#8A8B90',
          700: '#6C6D73',
          800: '#4E4F55',
          900: '#303138'
        },
        secondary: {
          DEFAULT: '#F5F2E9',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F5F2E9',
          600: '#E5DFC8',
          700: '#D5CCA7',
          800: '#C5B986',
          900: '#B5A665'
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'hover': '0 10px 40px -3px rgba(0, 0, 0, 0.1), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'
      }
    },
  },
  plugins: [],
};