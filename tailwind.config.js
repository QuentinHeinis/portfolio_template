/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helveticaNeue: "HelveticaNeue, sans-serif",
        helveticaNeueThin: "HelveticaNeueThin, sans-serif",
      },
      colors: {
        zblue: "#23272D"
      },
      cursor: {
        'pointer': 'none',
      },
      backgroundPosition: {
        hover: "50% 60%"
      }
    },
  },
  plugins: [],
}