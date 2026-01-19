/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        kasacity: {
          gold: "#F59E0B",
          sunset: "#FB923C",
          navy: "#0F172A",
          teal: "#0F766E",
          cream: "#FFF7ED",
        },
      },
    },
  },
  plugins: [],
};
