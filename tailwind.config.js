/** @type {import('tailwindcss').Config} */
const { screens } = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "390px",
      ssm: "412px",
      nsm: "520px",
      ...screens,
    },
    extend: {
      colors: {
        primary: "#73BOCD",
        secondary: "#37363C",
        accent: "#A8DFF1",
        "brand-gray": "#F9F9F9",
        "brand-gray-200": "#FBFBFB",
        "brand-bg": "#121212",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        lufga: ["Lufga", "serif"],
      },
    },
  },
  plugins: [],
};
