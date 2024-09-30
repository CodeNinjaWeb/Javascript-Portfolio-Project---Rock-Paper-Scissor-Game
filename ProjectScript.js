let playerChoice;
let randomChoice;
let computerWins;
let playerWins;
function userChoice(choice) {
  playerChoice = choice;
  computerChoice();
}

document.querySelectorAll(".icons img").forEach((img, index) => {
  img.onclick = () => userChoice(index + 1);
});

function computerChoice() {
  randomChoice = Math.floor(Math.random() * 3) + 1;
}

function reset() {
  playerChoice = 0;
  randomChoice = 0;
  console.log("Player selected: " + playerChoice);
  console.log("Computer selected: " + randomChoice);
}

function conditionCheck() {
  let resultCheck = "";
  if (playerChoice == randomChoice) {
    resultCheck = "DRAW";
  } else if (playerChoice == 1 && randomChoice == 2) {
    resultCheck = "COMPUTER WINS";
  } else if (playerChoice == 1 && randomChoice == 3) {
    resultCheck = "PLAYER WINS";
  } else if (playerChoice == 2 && randomChoice == 1) {
    resultCheck = "PLAYER WINS";
  } else if (playerChoice == 2 && randomChoice == 3) {
    resultCheck = "COMPUTER WINS";
  } else if (playerChoice == 3 && randomChoice == 1) {
    resultCheck = "COMPUTER WINS";
  } else if (playerChoice == 3 && randomChoice == 2) {
    resultCheck = "PLAYER WINS";
  }

  document.querySelector(".result").innerHTML = resultCheck;
}

function displaydata() {
  if (
    playerChoice >= 1 &&
    playerChoice < 4 &&
    randomChoice >= 1 &&
    randomChoice < 4
  ) {
    console.log("Player selected: " + playerChoice);
    console.log("Computer selected: " + randomChoice);

    conditionCheck();
  }
}
