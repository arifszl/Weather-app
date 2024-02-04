/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        daytime: "url('./src/assets/daytime.jpg')",
        nighttime: "url('./src/assets/nighttime1.jpg')",
        main: "url('./src/assets/cloud1.jpg')",
      },
    },
  },
  plugins: [],
};
