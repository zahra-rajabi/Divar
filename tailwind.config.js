/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BLACK: "#212121",
        GRAY: "#858585",
        LIGHT_RED: "#d89f9f",
        RED: "#a62626",
      },
      fontFamily: {
        vazir: [
          "Vazir",
          "Inter",
          " system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      screens: {
        xs: "420px",
        xlg: "960px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }),
  ],
};
