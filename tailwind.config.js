/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  darkMode: 'class', // or 'media' if you prefer
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        'extra-light': '200',
        light: '300',
        regular: '400',
        medium: '500',
        'semi-bold': '600',
        bold: '700',
        'extra-bold': '800',
        black: '900',
      },
      colors: {
        primary: {
          10: '#EBF5F4',
          20: '#BEEBE7',
          30: '#86D9D4',
          40: '#4EBFB9',
          50: '#279C9C',
          60: '#167B7D',
          70: '#155C5E',
          80: '#124241',
          90: '#102E2D',
          100: '#0C1A19',
        },
        secondary: {
          50: '#0F2064',
        },
        error: {
          100: '#FCECEF',
          200: '#F6D0D6',
          300: '#E39FA2',
          400: '#DF5E5E',
          500: '#E4514A',
          600: '#D64746', // base error color
          700: '#C43E40',
          800: '#AA2D2D',
        },
        success: {
          100: '#E8F4E8',
          200: '#C7E3C7',
          300: '#A4D0A4',
          400: '#67B266',
          500: '#50A54E',
          600: '#3B8439', // base success color
          700: '#32732E',
          800: '#24571A',
        },
        information: {
          100: '#E5F1FE',
          200: '#C1DBFC',
          300: '#9AC6FA',
          400: '#73B0F9',
          500: '#428FF7',
          600: '#376FD5', // base information color
          700: '#315EC3',
          800: '#263FA4',
        },
        warning: {
          100: '#FEF8C6',
          200: '#FDF3A1',
          300: '#FBEB64',
          400: '#F7E54D',
          500: '#F8D74A',
          600: '#F4BF42',
          700: '#F1A73B', // base warning color
          800: '#EB7E31',
        },
        neutral: {
          100: '#FFFFFF',
          200: '#EAEDF1',
          300: '#D4DAE2',
          400: '#A9B5C6',
          500: '#94A3B8', // base neutral color
          600: '#536977',
          700: '#292E36',
          800: '#0E1116',
        },
      },
    },
  },
  plugins: [],
};
