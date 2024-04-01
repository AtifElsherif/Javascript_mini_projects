const selectionBtns = document.querySelectorAll("[data-selection]");
const computerResult = document.querySelector("[data-last-column]");
const youScore = document.querySelector(".you .score");
const computerScore = document.querySelector(".computer .score");

const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    defeat: "scissors",
  },
  {
    name: "paper",
    emoji: "🤚",
    defeat: "rock",
  },
  {
    name: "scissors",
    emoji: "✌️",
    defeat: "paper",
  },
];

selectionBtns.forEach((selectionBtn) => {
  selectionBtn.addEventListener("click", () => {
    const selectionName = selectionBtn.dataset.selection;
    const yourSelection = SELECTIONS.find((selection) => {
      return selection.name === selectionName;
    });
    const computerSelection = randomSelection();

    const youWin = isWinner(yourSelection, computerSelection);
    const computerWin = isWinner(computerSelection, yourSelection);

    createResultSection(computerSelection, computerWin);
    createResultSection(yourSelection, youWin);

    if (youWin) {
      youScore.innerHTML = parseInt(youScore.innerHTML) + 1;
    }
    if (computerWin) {
      computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
    }
  });
});

const randomSelection = () => {
  const idx = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[idx];
};

const isWinner = function (selection, opponentSelection) {
  return opponentSelection.name === selection.defeat;
};

const createResultSection = function (selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  computerResult.after(div);
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
};
