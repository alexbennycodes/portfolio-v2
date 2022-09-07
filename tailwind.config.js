/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#ff1e56",
        lightThemeColor: "#ec466d",
        darkThemeColor: "#350e18",
        lightGrey: "#c0c0c0",
      },

      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
