module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.indigo.600"),
            },
            pre: {
              whiteSpace: "break-spaces",
            },
            "pre > pre": {
              margin: 0,
              padding: 0,
            },
          },
        },
      }),
    },
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
