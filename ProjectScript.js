let playerChoice;
function selectChoice(choice) {
  playerChoice = choice;
  console.log("Player selected: " + playerChoice);
}

document.querySelectorAll(".icons img").forEach((img, index) => {
  img.onclick = () => selectChoice(index + 1);
});
