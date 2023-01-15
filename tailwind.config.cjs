const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-cyan": "hsl(193, 38%, 86%)",
        "brand-green": "hsl(150, 100%, 66%)",
        "brand-blue-1": "hsl(217, 19%, 38%)",
        "brand-blue-2": "hsl(217, 19%, 24%)",
        "brand-blue-3": "hsl(218, 23%, 16%)",
      },
      screens: {
        xs: "375px",
      },
      fontSize: {
        body: "28px",
      },
      fontFamily: {
        "sans": ["Manrope", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
