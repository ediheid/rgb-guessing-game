// Color Generator
import colorGenerator from "./color-generator.js";
// Variables
import * as allVariables from "./variables.js";

// ===========================================================

// ? Game Function
export const startGame = () => {
  // Random color array
  let colorArr = [
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
  ];
  // Picks an index from the colorArr of random colours
  let index = Math.floor(Math.random() * colorArr.length);

  // Passes random index into a variable for the chosen color that will match the heading
  let matchingColor = colorArr[index];

  // Assigns random colors to the boxes
  for (let i = 0; i < allVariables.colorBoxButtons.length; i++) {
    allVariables.colorBoxButtons[i].style.backgroundColor = colorArr[i];
  }

  // Matches heading to chosen color with text content
  allVariables.randomNumberHeading.textContent = matchingColor;

  // creates a space into the matching color RGB value so it can match the box style property
  let result = matchingColor.replace(/,/g, ", ");

  // =======
  // ?  Nested guessing function
  const nowGuess = (event) => {
    if (event.target.style.backgroundColor == result) {
      alert("You did it! You guessed right!!");
    }
  };
  // Event listener to Guess
  allVariables.colorBoxButtons.forEach((button) => {
    button.addEventListener("click", nowGuess);
  });
};
