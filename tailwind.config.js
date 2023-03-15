/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helveticaNeue : "HelveticaNeue, sans-serif",
        helveticaNeueThin : "HelveticaNeueThin, sans-serif",
      },
      colors:{
        zblack: "#272727"
      }
    },
  },
  plugins: [],
}