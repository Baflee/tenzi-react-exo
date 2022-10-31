/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'bg-dice1',
    'bg-dice2',
    'bg-dice3',
    'bg-dice4',
    'bg-dice5',
    'bg-dice6',
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        dice1: "url('../public/images/dices/1 - Dice.png')",
        dice2: "url('../public/images/dices/2 - Dice.png')",
        dice3: "url('../public/images/dices/3 - Dice.png')",
        dice4: "url('../public/images/dices/4 - Dice.png')",
        dice5: "url('../public/images/dices/5 - Dice.png')",
        dice6: "url('../public/images/dices/6 - Dice.png')",
      },
      fontFamily: {
        verdana: ['Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
