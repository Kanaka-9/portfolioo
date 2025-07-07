/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // Enable dark mode using the "class" strategy
  theme: {
    extend: {
      perspective: {
        1000: "1000px",
        2000: "2000px",
      },
      colors: {
        zinc: {
          800: "#27272a",
          900: "#18181b",
        },
      },
      boxShadow: {
        '3xl': '0 10px 25px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
