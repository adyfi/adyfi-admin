/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
    screens: {
      xs: "576px",
      sm: "768px",
      md: "1024px",
      lg: "1366px",
      xl: "1440px",
    },
    colors: {
      ...colors,
      transparent: "transparent",
      primary: "#007AFF",
    }
  },
  plugins: [],
};
