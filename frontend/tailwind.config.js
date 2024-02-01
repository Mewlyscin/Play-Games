/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        green: "#7AFE02",
      },
      backgroundImage: {
        imgnav: "url('src/assets/background_Navbar/nav.jpg')",
      },
    },
  },
  plugins: [],
};
