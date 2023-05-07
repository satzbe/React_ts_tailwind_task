/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
    colors: {
      mainColor: "#1597E4",
      borderClr: "#E6E6E6",
      errorClr: "#D86161",
      plh: "#7A7A7A",
      darkFont: "#212121",
      lightFont: "#FAFAFA",
      backgroundClr: "#F5F5F5",
      default: "white",
    },
  },
  plugins: [],
};
