/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://dbrain-studio.com/wp-content/uploads/2022/02/wardrobe-design-thumbnail-min.png')",
      },
      colors: {
        white: "#ffffff",
        transparent: "transparent",
        primary: "#efc8b1",
        secondary: "#514644",
        tertiary: "#f2f2f2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        railway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
