const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    colors: {
      color1: "#0c0b09",
      color2: "#1A1814",
      color3: "#737373",
      color4: "#aaaaaa",
      color5: "#D0D0D0",
      color6: "#E8E8E8",
      color7: "#F3F3F3",
      color8: "#FFFFFF",
      color9: "#FEA116",
      color10: "#0c0b0999",
    },
    fontFamily: {
      nunito: '"Nunito", sans-serif',
      pacifico: '"Pacifico", cursive',
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
