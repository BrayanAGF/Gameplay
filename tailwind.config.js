const {nextui} = require("@nextui-org/react");
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "Dark": {
        extend: 'dark',
        colors: {
          background: "#0F0F0F",
          content1: "#3d3d3d",
          overlay: "#3F3F46"
        },
        
      }
    }
  })],
}
