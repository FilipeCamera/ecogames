const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "280px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: colors.coolGray,
      white: colors.white,
      blue: colors.blue,
      red: colors.red
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
