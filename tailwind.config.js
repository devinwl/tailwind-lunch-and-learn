module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      translate: ["active"],
      ringColor: ["hover", "active"],
      ringWidth: ["hover", "active"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
