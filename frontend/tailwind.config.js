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
      // backgroundImage: {
      // "bg-header": url("./assets/backgroung_Navbar/logo-Play-games(1).png"),
      // },
    },
  },
  plugins: [],
};
