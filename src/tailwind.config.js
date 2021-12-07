module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
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
      colors: {
        transparent: "transparent",
        current: "currentColor",
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
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
