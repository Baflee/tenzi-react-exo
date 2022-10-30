/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cowboy: "url('../public/cowboy-background.jpg')",
      },
      fontFamily: {
        alarm: ["Alarm", "sans-serif"],
        casino: ["Casino", "sans-serif"],
        clarendon: ["Clarendon", "sans-serif"],
      },
    },
  },
  plugins: [],
};
