/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        daytime: "url('./public/daytime.jpg')",
        nighttime: "url('./public/nighttime1.jpg')",
        main: "url('./public/cloud1.jpg')",
      },
    },
  },
  plugins: [],
};
