/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      olive: "#606c38",
      kombu: "#283618",
      silk: "#FEFAE0",
      yellow: "#dda15e",
      orange: "#bc6c25"
    },
    extend: {}
  },
  plugins: [require("daisyui")]
}
