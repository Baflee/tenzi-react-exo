import React from 'react'
import keepDice from './TenziGame'

function dicesButton(props) {
  const buttons = props.dicesArray.map((dice) => (
    <div
      key={dice.id}
      index={dice.id}
      className={`${
        dice.isLocked ? 'border-blue-600' : 'border-black'
      } flex py-36 px-28 bg-dice${dice.value}
      } bg-cover border border-4 rounded-lg bg-black text-4xl mx-auto font-semibold text-justify`}
      onClick={() => props.buttonKeep(dice.id)}
    ></div>
  ))
  return buttons
}

export default dicesButton
