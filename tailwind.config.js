/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf8f3',
          100: '#f5f1e8',
          200: '#e8dfd0',
          300: '#dcc8b0',
          400: '#d0b598',
          500: '#c9a877',
          600: '#b8925f',
          700: '#8d7051',
          800: '#6d5844',
        },
        teal: {
          50: '#f0fdf9',
          100: '#d1f8ed',
          200: '#a8eee4',
          300: '#75e4d8',
          400: '#4ed9cc',
          500: '#2eccc0',
          600: '#20b2a0',
          700: '#188f87',
          800: '#157170',
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #faf8f3 0%, #f5e6d3 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(46, 204, 192, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [],
};
