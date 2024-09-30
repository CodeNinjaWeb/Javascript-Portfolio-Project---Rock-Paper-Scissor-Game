let playerChoice;
let randomchoice;
let computerwins;
let playerwins;
function userChoice(choice) {
  playerChoice = choice;
  computerChoice();
}

document.querySelectorAll(".icons img").forEach((img, index) => {
  img.onclick = () => userChoice(index + 1);
});

function computerChoice() {
  randomchoice = Math.floor(Math.random() * 3) + 1;
}

function reset() {
  playerChoice = 0;
  randomchoice = 0;
  console.log("Player selected: " + playerChoice);
  console.log("Computer selected: " + randomchoice);
}
//Below this Just for Displaying Data.
function displaydata() {
  if (
    playerChoice >= 1 &&
    playerChoice < 4 &&
    randomchoice >= 1 &&
    randomchoice < 4
  ) {
    console.log("Player selected: " + playerChoice);
    console.log("Computer selected: " + randomchoice);
  }
}

displaydata();
//Above this Just for Displaying Data.

function conditionCheck() {
  if (playerChoice == randomchoice) {
    console.log("DRAW");
  } else if (playerChoice == 1 && randomchoice == 2) {
    console.log("COMPUTER WINS");
  } else if (playerChoice == 1 && randomchoice == 3) {
    console.log("PLAYER WINS");
  } else if (playerChoice == 2 && randomchoice == 1) {
    console.log("PLAYER WINS");
  } else if (playerChoice == 2 && randomchoice == 3) {
    console.log("COMPUTER WINS");
  } else if (playerChoice == 3 && randomchoice == 1) {
    console.log("COMPUTER WINS");
  } else if (playerChoice == 3 && randomchoice == 2) {
    console.log("PLAYER WINS");
  }
}
