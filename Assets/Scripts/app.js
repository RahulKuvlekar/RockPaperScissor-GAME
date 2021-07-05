const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
let isGameRunning = false;

const getPlayerChoice = () => {
  const choice = prompt(
    `Enter ${ROCK},${PAPER} or ${SCISSOR}`,
    ""
  ).toUpperCase();
  if (choice != ROCK && choice != PAPER && choice != SCISSOR) {
    alert("Invalid - Choice.... Default ( ROCK ) Selected ... ");
    return DEFAULT_USER_CHOICE;
  }
  return choice;
};

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.333) {
    choice = ROCK;
  } else if (choice < 0.666) {
    choice = PAPER;
  } else {
    choice = SCISSOR;
  }
  return choice;
}
// p-R c-S
// p-S c-p
// p-p c-r

const getWinner = (pChoice, cChoice) =>
  pChoice === cChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === SCISSOR) ||
      (pChoice === SCISSOR && cChoice === PAPER) ||
      (pChoice === PAPER && cChoice === ROCK)
    ? "PLAYER WIN"
    : "COMPUTER WIN";

// {
//     if (pChoice === cChoice) {
//         return RESULT_DRAW;
//     }
//     else if (
//         pChoice === ROCK && cChoice === SCISSOR ||
//         pChoice === SCISSOR && cChoice === PAPER ||
//         pChoice === PAPER && cChoice === ROCK
//         ){
//             return "PLAYER WIN";
//         }
//     else{
//         return "COMPUTER WIN"
//     }
//     }

function startGameBtnClick() {
  if (isGameRunning) {
    console.log("Game is already running");
    return;
  }
  isGameRunning = true;
  let pChoice = getPlayerChoice();
  let cChoice = getComputerChoice();
  let winner = getWinner(pChoice, cChoice);
  console.log(
    `Player Selected "${pChoice}" , and Computer Selected "${cChoice}"`
  );
  console.log("RESULTS -->> ", winner);
  alert(`RESULTS -->> ${winner}`);
}

startGameBtn.addEventListener("click", startGameBtnClick);
