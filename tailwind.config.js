/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        daytime: "url('.src/assets/public/daytime.jpg')",
        nighttime: "url('.src/assets/public/nighttime1.jpg')",
        main: "url('.src/assets/public/cloud1.jpg')",
      },
    },
  },
  plugins: [],
};
