/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#73BOCD",
        secondary: "#37363C",
        accent: "#A8DFF1",
        "brand-gray": "#F9F9F9",
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
