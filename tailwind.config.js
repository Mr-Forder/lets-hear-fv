module.exports = {
  darkMode: "class",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F6F6FB",
        },
        teal: {
          50: "#10AEC9",
        },
        rouge: {
          50: "#E5003C",
          500: "#ce0000",
        },
        cyan: {
          50: "#0b7dc6",
        },
        pale: {
          50: "#9dedf0",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
