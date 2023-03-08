module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        Gray: "#484848",
        DarkGray: "#181a1b",
      },
      boxShadow: {
        box: "10px 10px 15px black",
      },
    },
  },
  plugins: [],
};
