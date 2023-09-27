"use strict";

// document.querySelector(".number").textContent = 5;
// document.querySelector(".message").textContent = "You are Correct!";
// document.querySelector(".score").textContent = 5;
// document.querySelector(".guess").value = 10;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Invalid Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      " You Got The Right Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".topscore").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Number Too High!";
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

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Guess The Number!";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".topscore").textContent = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
