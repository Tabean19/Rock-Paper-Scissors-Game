/*jshint esversion: 6 */
//generate computer play

//get users play
const btn = document
  .getElementById("btn")
  .addEventListener("click", function(event) {
    event.preventDefault();
    const uPlay = document.querySelector('input[name = "play"]:checked').value;
    const array = ["Rock", "Paper", "Scissors"];
    const rand = [Math.floor(Math.random() * array.length)];
    const cPLay = array[rand];
    comparePlay(uPlay, cPLay);
  });

//compare choices
function comparePlay(choice1, choice2) {
  const rand = document.getElementById("rand");
  const result = document.getElementById("result");
  rand.innerHTML = choice2;
  if (choice1 === "Rock") {
    switch (choice2) {
      case "Rock":
        result.innerHTML = "You Tied!";
        break;
      case "Paper":
        result.innerHTML = "You Lose!";
        break;
      case "Scissors":
        result.innerHTML = "You Win!";
        break;
    }
  }
  if (choice1 === "Paper") {
    switch (choice2) {
      case "Rock":
        result.innerHTML = "You Win!";
        break;
      case "Paper":
        result.innerHTML = "You Tied!";
        break;
      case "Scissors":
        result.innerHTML = "You Lose!";
        break;
    }
  }
  if (choice1 === "Scissors") {
    switch (choice2) {
      case "Rock":
        result.innerHTML = "You Lose!";
        break;
      case "Paper":
        result.innerHTML = "You Win!";
        break;
      case "Scissors":
        result.innerHTML = "You Tied!";
        break;
    }
  }
}
