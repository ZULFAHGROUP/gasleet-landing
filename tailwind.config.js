/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: { min: "415px", max: "800px" },

        sm: { max: "414px" },
      },

      fontFamily: {
        fjalla: ["Fjalla One", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      backgroundImage: {
        background: "url('/src/assets/bgImage.png')",
      },
    },
  },
  plugins: [],
};
