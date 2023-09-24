function reset() {
  score.wins = 0;
  score.lose = 0;
  score.tie = 0;
  updateScore();
  localStorage.removeItem("score");
}

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  lose: 0,
  tie: 0,
};

//   updateresult();
//   updateMove();
updateScore();

// if(!score){
//     score={
//         wins:0,
//         lose:0,
//         tie:0
//     }
// }
let computerMove = "";
let result = "";
function playGame(playMove) {
  computerMove = pickComputerMove();

  if (playMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "lose.";
    } else if (computerMove === "scissors") {
      result = "win.";
    }
  }
  if (playMove === "paper") {
    if (computerMove === "rock") {
      result = "win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "lose.";
    }
  }
  if (playMove === "scissors") {
    if (computerMove === "rock") {
      result = "lose.";
    } else if (computerMove === "paper") {
      result = "win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }
  if (result === "win.") {
    score.wins += 1;
  }
  if (result === "lose.") {
    score.lose += 1;
  }
  if (result === "Tie.") {
    score.tie += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  updateresult();
  document.querySelector(".js-moves").innerHTML = ` You
  <img class="move-icon" src="images/${playMove}.png" alt="" />
  <img class="move-icon" src="images/${computerMove}.png" alt="" />
  computer`;
  updateScore();
  // alert(`You picked ${playMove}.Computer picked ${computerMove}.${result}
  //         wins:${score.wins},loses:${score.lose},tie:${score.tie}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  console.log(computerMove);
  return computerMove;
}

function updateresult() {
  document.querySelector(".js-result").innerHTML = `${result}`;
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = ` wins:${score.wins},loses:${score.lose},tie:${score.tie}`;
}
let isAutoPlay = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(function () {
      let playMove = pickComputerMove();
      playGame(playMove);
    }, 1000);
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
  }
}

const rockButton = document.querySelector(".js-rock-button");
rockButton.addEventListener("click", () => {
  playGame("rock");
});
const paperButton = document.querySelector(".js-paper-button");
paperButton.addEventListener("click", () => {
  playGame("paper");
});
const scissorsButton = document.querySelector(".js-stone-button");
scissorsButton.addEventListener("click", () => {
  playGame("scissors");
});

const resetButton = document.querySelector(".js-reset-button");
resetButton.addEventListener("click", () => {
  reset();
});

const autoPlayButton = document.querySelector(".js-auto-play-button");
autoPlayButton.addEventListener("click", () => {
  autoPlay();
});
const bodyElement = document.body;
bodyElement.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  }
});
