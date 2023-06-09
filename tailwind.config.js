/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito_bold: ["nunito_bold"],
        nunito_regular: ["nunito_regular"],
        nunito_light: ["nunito_light"],
      },
      width: {
        86: "22rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
