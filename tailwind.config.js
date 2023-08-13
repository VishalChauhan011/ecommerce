/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#0e0e0e",
          "200": "rgba(0, 0, 0, 0.2)",
          "300": "rgba(0, 0, 0, 0.7)",
          "400": "rgba(0, 0, 0, 0.5)",
        },
        black: "#000",
        whitesmoke: "#f6f6f6",
        yellowgreen: "#d6e35e",
        plum: "#b4aff0",
        aliceblue: "#ebeff8",
      },
      fontFamily: {
        manrope: "Manrope",
        "redacted-script": "'Redacted Script'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "20px",
      sm: "14px",
      base: "16px",
      xs: "12px",
      "3xs": "10px",
      "5xl": "24px",
      lg: "18px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
