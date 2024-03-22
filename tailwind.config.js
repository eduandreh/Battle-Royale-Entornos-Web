/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'buttons': '#763DCF',
        'placeholder': '#1A1C26',
        'steel': '#34363E'
      },
    },
  },
  plugins: [],
}

