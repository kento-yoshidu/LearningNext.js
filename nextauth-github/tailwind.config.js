/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "wrapper":  ["Helvetica Neue", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo"]
    },
    extend: {
      colors: {
        "white": "#ffffff"
      },
    },
  },
  plugins: [],
}
