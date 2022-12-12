/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      merri: ["Merriweather", "serif"],
      play: ["Playfair Display", "serif"],
    },
    extend: {
      colors: {
        clifford: "#da373d",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
