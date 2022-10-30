import React, { useState, useEffect } from "react";
import DicesButton from "./DicesButton";

function TenziGame() {
  const [dices, setDices] = useState([
    ...Array(10)
      .fill({ id: 0, value: 0, isLocked: false })

      .map((dice, id) => ({
        ...dice,
        id: id,
        value: Math.floor(Math.random() * 6) + 1,
      })),
  ]);

  const [tenziWin, setTenziWin] = React.useState(false);

  function keepDice(diceNumber) {
    setDices((prevState) => {
      return prevState.map((dice) => {
        if (dice.id === diceNumber && !tenziWin) {
          return {
            ...dice,
            isLocked: !dice.isLocked,
          };
        } else {
          return dice;
        }
      });
    });
    console.log("aaaaaaaa " + JSON.stringify(dices));
  }

  function randomDices() {
    for (var des = 0; des < 10; des++) {
      setDices(
        dices.map((dice) => {
          if (!tenziWin) {
            return {
              ...dice,
              value: dice.isLocked
                ? dice.value
                : Math.floor(Math.random() * 6 + 1),
              isLocked: dice.isLocked,
            };
          } else {
            return {
              ...dice,
              value: Math.floor(Math.random() * 6 + 1),
              isLocked: false,
            };
          }
        })
      );
    }
  }

  useEffect(() => {
    let allNumberEqual = dices.every((v) => v.value === dices[0].value);
    let allNumberLocked = dices.every((v) => v.isLocked === true);

    if (allNumberLocked && allNumberEqual) {
      setTenziWin(true);
    } else if (tenziWin) {
      setTenziWin(false);
    }
  }, [dices]);

  return (
    <>
      <div
        className={`flex self-center items-center justify-center flex-wrap max-w-md gap-5
`}
      >
        <DicesButton dicesArray={dices} buttonKeep={keepDice} />
      </div>
{/*       <div
        className={`font-clarendon bg-amber-800 flex `}
      >
        <button
          type="button"
          onClick={() => randomDices()}
          className={`p-5 flex w-32 h-32 m-8 items-center text-xl drop-shadow-xl	text-white font-semibold bg-zinc-900 rounded-full	${
            tenziWin ? "bg-green-400" : "bg-red-600"
          }`}
        >
          {tenziWin === true ? "Reset le jeu !" : "Lancer les des !"}
        </button>
      </div> */}
    </>
  );
}

export default TenziGame;
