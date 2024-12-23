/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "rgb(229,238,241)",
          secondary: "rgb(30,31,36)",
          pinkColor: "rgb(255,105,180)",
          text_color: "#FFFFFF",
          text_color2: "#B0AAC0",
          text_color3: "#E0E0E0",
        },
        dark: {},
      },
    },
  },
  plugins: [],
};
