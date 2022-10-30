import React from "react";
import { _ } from "lodash";

function LegacyTenziGame() {
  let launchDes = [];
  let count = {};
  let leftDes = 10;
  let setDes = [];
  
  const LegacytenziRound = () => {
    for (var des = 0; des < leftDes; des++) {
      launchDes[des] = randomNumber(1, 6);
    }

    launchDes.forEach((element) => {
      count[element] = (count[element] || 0) + 1;
    }); 

    //First round
    if (leftDes == 10) {
      for (const [key, value] of Object.entries(count)) {
        if (Math.max.apply(null, Object.values(count)) === value) {
          setDes = Array(value).fill(key);
          leftDes -= value;
        }
      }
      alert("first round");
      alert(JSON.stringify(count));
      alert("launchDes: " + launchDes);
      alert("setDes: " + setDes);
      alert("leftDes: " + leftDes);
      launchDes = [];
      count = {};
      return setDes;
    } else if (leftDes < 10) {
      //rest of the round
      for (const [key, value] of Object.entries(count)) {
        if (Number(key) == Number(setDes[0])) {
          alert("test 1");
          if ((leftDes - value) >= 0) {
            alert("test 2");
            setDes = [...setDes, Array(value).fill(key)];
            leftDes -= value;
          } else {
            alert("test 3");
            setDes = [...setDes, Array(leftDes).fill(key)];
            leftDes -= leftDes;           
          }
        }
      }
      alert("rest of the round");
      alert(JSON.stringify(count));
      alert("launchDes: " + launchDes);
      alert("setDes: " + setDes);
      alert("leftDes: " + leftDes);
      launchDes = [];
      count = {};
      return setDes;
    } else {
      alert("Tenzi !")
      leftDes = 10;
      setDes = [];
      launchDes = [];
      count = {};
    }
  };
  

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
      <button type="button" onClick={LegacytenziRound}>Lancer les dés</button>
  );
}

export default LegacyTenziGame;
