"use strict";

// ? Imports

// Variables
import { startButton } from "./variables.js";

// Game Function
import startGame from "./gameFunction.js";
// ===========================================================

//? Event Listener to start the game
// Start Button
startButton.addEventListener("click", startGame);
