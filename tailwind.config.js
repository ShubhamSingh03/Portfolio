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
        white: "#fff",
        bgColorGray: "#313131",
        grayLighter: "#989898",
        black: "#000",
        blackLight: "#131313",
        blackLighter: "#232323",
        yellow: "#ffdb44",
        reactLogoColor: "#61dafb",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
