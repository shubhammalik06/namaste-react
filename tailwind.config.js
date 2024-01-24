/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-fast": "0.25s cubic-bezier(.4, 0, .6, 1) infinite pulse;",
      },
      colors: {
        "black-color": "#212020",
      },
    },
  },
  plugins: [],
};
