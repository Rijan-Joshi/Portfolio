/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        signature: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        primary: '#2563eb', // blue-600
        secondary: '#475569', // slate-600
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}