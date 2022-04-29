module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlueDivider: "rgba(128, 164, 214, 0.2)",
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        cyanOverlay: "rgba(0, 255, 247, 0.2)",
        veryDarkBlueMain: "hsl(217, 54%, 11%)",
        veryDarkBlueCard: "hsl(216, 50%, 16%)",
        veryDarkBlueLine: "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        sans: ["outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
