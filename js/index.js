"use strict";

// =======
// Query Variables

const boxOne = document.querySelector("#box-1");
const boxTwo = document.querySelector("#box-2");
const boxThree = document.querySelector("#box-3");
const boxFour = document.querySelector("#box-4");
const boxFive = document.querySelector("#box-5");
const boxSix = document.querySelector("#box-6");

const randomNumberHeading = document.querySelector("#random-number-heading");

const startButton = document.querySelector("#start-button");

const colorBoxButtons = document.querySelectorAll(".color-box");

// =======
// Random Color Generator

const generateRandomColor = () => {
  let rgbColor = Math.floor(Math.random() * 255) + 1;
  return rgbColor;
};

const colorGenerator = () => {
  let red = generateRandomColor();
  let green = generateRandomColor();
  let blue = generateRandomColor();

  let newColor = `rgb(${red},${green},${blue})`;
  return newColor;
};

// create function that generates 6 random colours - colours in variables that can be passed into the boxes from an array

const startGame = () => {
  // Assigning Random Colors to boxes and one matching to Header..

  //? Original longer code to assign random colors..

  //   let colorOne = colorGenerator();
  //   let colorTwo = colorGenerator();
  //   let colorThree = colorGenerator();
  //   let colorFour = colorGenerator();
  //   let colorFive = colorGenerator();
  //   let colorSix = colorGenerator();

  //   let colorArr = [colorOne, colorTwo, colorThree, colorFive, colorSix];

  //   let index = Math.floor(Math.random() * colorArr.length);
  //   let matchingColor = colorArr[index];

  //   boxOne.style.backgroundColor = colorOne;
  //   boxTwo.style.backgroundColor = colorTwo;
  //   boxThree.style.backgroundColor = colorThree;
  //   boxFour.style.backgroundColor = colorFour;
  //   boxFive.style.backgroundColor = colorFive;
  //   boxSix.style.backgroundColor = colorSix;

  // =========
  //? Shortened code to assign random colors..

  let colorArr = [
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
  ];

  let index = Math.floor(Math.random() * colorArr.length);
  let matchingColor = colorArr[index];

  for (let i = 0; i < colorBoxButtons.length; i++) {
    colorBoxButtons[i].style.backgroundColor = colorArr[i];
  }

  // Result and heading with result RGB number
  randomNumberHeading.textContent = matchingColor;
  let result = matchingColor.replace(/,/g, ", ");

  //? How to create space again..
  //   result = matchingColor.replaceAll(" ", "");
  //   result = matchingColor.replace(/", "/g, ",");

  // =======
  // Nested guessing function

  const nowGuess = (event) => {
    if (event.target.style.backgroundColor == result) {
      alert("You did it! You guessed right!!");
    }
    //! for testing
    // console.log(`You clicked on ${event.target.id}`);
    // console.log(event.target.style.backgroundColor);
    // console.log(result);

    // console.log(event.target.style.backgroundColor);
    // console.log(matchingColor);
    // console.log(typeof event.target.style.backgroundColor);
    // console.log(typeof matchingColor);
    // console.log(result);
  };

  // Event listener to Guess
  colorBoxButtons.forEach((button) => {
    button.addEventListener("click", nowGuess);
  });
};

// Event Listener to start the game
startButton.addEventListener("click", startGame);
