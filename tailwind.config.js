/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        accent: {
          base: "hsla(217,50%,25%,1)",
          light: "hsla(217,40%,20%,.6)",
          lighter: "hsl(217,50%,26%)",
        },
      },
    },
  },
  plugins: [],
};
