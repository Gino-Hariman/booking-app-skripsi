module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.js"],
  content: ["./src/**/*.{js,jsx}", "./src/**/*.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: {
        100: "#000000",
        90: "#1A1A1A",
        80: "#333333",
        70: "#4D4D4D",
        60: "#666666",
        50: "#808080",
        40: "#999999",
        30: "#B3B3B3",
        20: "#CCCCCC",
        10: "#E6E6E6",
      },
      primary: "#315DD1",
      danger: {
        main: "#F11414",
        surface: "#FFE9E9",
        border: "#FFBCBC",
        hover: "#BE0000",
        pressed: "#840303",
      },
      warning: {
        main: "#FFB800",
        surface: "#FFF2CE",
        border: "#FFE7AA",
        hover: "#B98500",
        pressed: "#886201",
      },
      success: {
        main: "#27CC4B",
        surface: "#E0FFE7",
        border: "#B5EEC2",
        hover: "#149E32",
        pressed: "#127828",
      },
      info: {
        main: "#275FCC",
        surface: "#DEE9FF",
        border: "#BED3FB",
        hover: "#1D489B",
        pressed: "#13316B",
      },
    },
    fontSize: {
      H1: ["3rem", { lineHeight: "72px" }],
      H2: ["2.5rem", { lineHeight: "60px" }],
      H3: ["2rem", { lineHeight: "48px" }],
      H4: ["1.5rem", { lineHeight: "36px" }],
      H5: ["1.25rem", { lineHeight: "30px" }],
      Body: ["1.125rem", { lineHeight: "27px" }],
      Caption: ["1rem", { lineHeight: "24px" }],
      Tag: ["0.875rem", { lineHeight: "21px" }],
      Sub: ["0.75rem", { lineHeight: "18px" }],
    },
  },
  extend: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    spacing: {
      "48px": "48px",
    },
    padding: {
      "48px": "48px",
    },
    margin: {
      "48px": "48px",
    },
    boxShadow: {
      "dark-sm": "0px 10px rgba(0, 0, 0, 0.05)",
    },
    aspecRatio: {
      "4/3": "3 / 2",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
