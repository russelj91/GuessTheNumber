"use strict";

// document.querySelector(".number").textContent = 5;
// document.querySelector(".message").textContent = "You are Correct!";
// document.querySelector(".score").textContent = 5;
// document.querySelector(".guess").value = 10;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      " You Got The Right Number";
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
      document.querySelector(".message").textContent = "You Lose The Game!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".message").textContent = "You Lose The Game!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

//   else if (guess > secretNumber || guess < secretNumber) {
//     document.querySelector(".message").textContent = "Number Too High!";
//     if (score > 1) {
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".number").textContent = secretNumber;
//       document.querySelector(".message").textContent = "You Lose The Game!";
//       document.querySelector("body").style.backgroundColor = "red";
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Number Too Low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".number").textContent = secretNumber;
//       document.querySelector(".message").textContent = "You Lose The Game!";
//       document.querySelector("body").style.backgroundColor = "red";
//     }
//   }
// });

document.querySelector(".reset").addEventListener("click", function () {
  score = 10;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Guess The Number!";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
});
