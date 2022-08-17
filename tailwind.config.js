/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      mirage: "#0C1322",
      steel: "#79859A",
      levender: "#E2E8F0",
      black: "#0E1628",
      grey: "#C1C7D1",
      dark: "#172131",
      midnight: "#0F172A",
    },
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#38BDF8",
          secondary: "#F87171",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
