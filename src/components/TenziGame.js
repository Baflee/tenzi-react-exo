import React, { useState, useEffect } from 'react'
import DicesButton from './DicesButton'

function TenziGame() {
  const [leastRolls, setLeastRolls] = useState(0)
  const [rolls, setRolls] = useState(0)
  const [bestTimer, setBestTimer] = useState(0)
  const [timer, setTimer] = useState(0)
  const [dices, setDices] = useState([
    ...Array(10)
      .fill({ id: 0, value: 0, isLocked: false })

      .map((dice, id) => ({
        ...dice,
        id: id,
        value: Math.floor(Math.random() * 6) + 1,
      })),
  ])

  const [tenziWin, setTenziWin] = React.useState(false)

  function keepDice(diceNumber) {
    setDices((prevState) => {
      return prevState.map((dice) => {
        if (dice.id === diceNumber && !tenziWin) {
          return {
            ...dice,
            isLocked: !dice.isLocked,
          }
        } else {
          return dice
        }
      })
    })
  }

  function rollDices() {
    setRolls(rolls + 1)
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
            }
          } else {
            return {
              ...dice,
              value: Math.floor(Math.random() * 6 + 1),
              isLocked: false,
            }
          }
        }),
      )
    }
  }

  useEffect(() => {
    let allNumberEqual = dices.every((v) => v.value === dices[0].value)
    let allNumberLocked = dices.every((v) => v.isLocked === true)
    let interval = null

    interval = setInterval(() => {
      setTimer((timer) => timer + 10)
    }, 10)

    if (allNumberLocked && allNumberEqual) {
      if (leastRolls > rolls || leastRolls === 0) {
        setLeastRolls(rolls)
      }
      if (bestTimer > timer || bestTimer === 0) {
        setBestTimer(timer)
      }
      setTenziWin(true)
    } else if (tenziWin) {
      setRolls(0)
      setTimer(0)
      setTenziWin(false)
    }
  }, [dices])

  return (
    <>
      <div
        className={`flex self-center items-center justify-center grid grid-cols-5 gap-3 pt-2
`}
      >
        <DicesButton dicesArray={dices} buttonKeep={keepDice} />
      </div>
      <div
        className={`font-verdana bg-white border-t-8 border-t-black flex self-center items-center justify-center mt-3.5 gap-24`}
      >
        <img src="/images/Logo.png" className={`object-scale-down	`}></img>
        <div
          className={`shadow-inner shadow-black p-2 flex self-center items-center justify-center`}
        >
          Best Timer : {('0' + Math.floor((bestTimer / 60000) % 60)).slice(-2)}.
          {('0' + Math.floor((bestTimer / 1000) % 60)).slice(-2)}.
          {('0' + ((bestTimer / 10) % 100)).slice(-2)}
        </div>
        <div
          className={`shadow-inner shadow-black p-2 flex self-center items-center justify-center`}
        >
          Actual Timer : {('0' + Math.floor((timer / 60000) % 60)).slice(-2)}.
          {('0' + Math.floor((timer / 1000) % 60)).slice(-2)}.
          {('0' + ((timer / 10) % 100)).slice(-2)}
        </div>{' '}
        <div
          className={`shadow-inner shadow-black p-2 flex self-center items-center justify-center`}
        >
          Actual Roll : {rolls}
        </div>{' '}
        <div
          className={`shadow-inner shadow-black p-2 flex self-center items-center justify-center`}
        >
          Least Roll : {leastRolls}
        </div>
        <button
          type="button"
          onClick={() => rollDices()}
          className={`p-3.5 flex w-36 h-36 my-24 shadow-xl shadow-black items-center text-xl text-white font-verdana rounded-full	${
            tenziWin ? 'bg-blue-400' : 'bg-red-600'
          }`}
        >
          {tenziWin === true ? 'TEST FINISH "RESET" ' : 'RESHUFFLE'}
        </button>
      </div>
    </>
  )
}

export default TenziGame
