import React from "react";
import keepDice from "./TenziGame";

function dicesButton(props) {
  const buttons = props.dicesArray.map((dice) => (
    <div
      key={dice.id}
      index={dice.id}
      className={`${
        dice.isLocked ? "text-green-400" : "text-red-600"
      } flex p-5 text-4xl font-semibold bg-white border-4 border-black`}
      onClick={() => props.buttonKeep(dice.id)}
    >
      {dice.value}
    </div>
  ));
  return buttons;
}

export default dicesButton;
