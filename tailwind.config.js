/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        negro:"#000000",
        blanco: "#eaeaea",
        oscuro_0: "#020202",
        oscuro_1: "#19191a",
        oscuro_2: "#373739",
        secundario: "#191919",
        primario: "#700b5f",
      },
      fontFamily: {
        exo: ["'Exo 2'", "sans-serif"], // Asegura que se use Exo 2 como fuente principal
      },
    },
  },
  plugins: [],
};