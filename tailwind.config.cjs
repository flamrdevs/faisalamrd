const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
