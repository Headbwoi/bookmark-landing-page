module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      rubik: [`Rubik`, "sans-serif"],
    },
    colors: {
      softBlue: "hsl(231, 69%, 60%)",
      softRed: "hsl(0, 94%, 66%)",
      grayishBlue: "hsl(229, 8%, 60%)",
      veryDarkBlue: "hsl(229, 31%, 21%)",
      mobileMenuBg: "hsla(229, 31%, 21%, 0.9)",
      white: "hsl(0, 0%, 100%)",
      semiWhite: "hsl(0, 0%, 97%)",
    },
    extend: {},
  },
  plugins: [],
};
