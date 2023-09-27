"use strict";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let score = 10;
let highscore = 0;
let secretNumber;

document.querySelector(".reset").addEventListener("click", function () {
  score = 10;

  displayMessage("Guess The Number!");
  document.querySelector(".number").textContent = "?";

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  // Generate a new secretNumber when resetting the game
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    displayMessage("You Got The Right Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".topscore").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".topscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    document.querySelector(".message").textContent =
      guess > secretNumber ? "Number Too High!" : "Number Too Low!";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".number").textContent = secretNumber;
      displayMessage("You Lose The Game!");
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// Generate the initial secretNumber when the page loads
secretNumber = Math.trunc(Math.random() * 20) + 1;
