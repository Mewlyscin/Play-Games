/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        green: "#7AFE02",
        beige: "#F3F0EB",
      },
      backgroundImage: {
        imgnav: "url('src/assets/background_Navbar/nav.jpg')",
      },
    },
  },
  plugins: [],
};
