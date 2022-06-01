const colors = require("tailwindcss/colors");

const newColors = {
  ...colors,
  "light-gray": "#F5F5F5",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1180px",
      xl: "1320px",
    },
    colors: {
      ...newColors,
    },
    backgroundColor: {
      ...newColors,
    },
    textColor: {
      ...newColors,
    },
    fontFamily: {
      primary: ["Libre Caslon Display", "serif"],
    },
    extend: {
      gridTemplateRows: {
        activitiesGrid: "repeat(7, 200px)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
        slide: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(3px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        slide: "slide 1s ease-in-out infinite",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
