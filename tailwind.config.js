module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ["./src/*.html"],
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    extend: {
      colors: {
        primary: "#38A3A5",
        secondary: "#4B4446",
        accent: "#FFF8EE",
        dark: "#eae6e0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
