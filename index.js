let whosTurn = "X";
let someoneWon = false;

const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
const square9 = document.getElementById("square9");
const currentTurn = document.getElementById("current-turn");
const winMessage = document.getElementById('win');

const winConditions = [
  [square1, square2, square3],
  [square1, square4, square7],
  [square1, square5, square9],
  [square2, square5, square8],
  [square3, square5, square7],
  [square3, square6, square9],
  [square4, square5, square6],
  [square7, square8, square9]];

currentTurn.innerHTML = "X's turn";
// only begin checking after 5th move
// draw message
// fix the algorithm for win condition
// modify next move text if game ends

function fillSquare(event) {
  console.log('this is the event.target', event.target);
  event.target.children[0].innerHTML = whosTurn;
  for (let i = 0; i < winConditions.length; i += 1) {
    for (let k = 1; k < winConditions[i].length; k += 1) {
      const currentSquare = winConditions[i][k].children[0].innerHTML; // string
      const prevSquare = winConditions[i][k - 1].children[0].innerHTML; // string
      if (currentSquare !== prevSquare || currentSquare === '') {
        break;
      } else if (k === winConditions[i].length - 1) {
        someoneWon = true;
        setWin();
      }
    }
    if (someoneWon) {
      break;
    }
  }
  switchTurn();
  event.target.removeEventListener("click", fillSquare);
  // logic to check if there is a win condition met
}

function setWin() {
  winMessage.innerHTML = `${whosTurn} won!`;
  for (let i = 1; i < 10; i++) {
    document.getElementById(`square${i}`).removeEventListener("click", fillSquare);
  }
}

function switchTurn() {
  if (whosTurn === "X") {
    whosTurn = "O";
    currentTurn.innerHTML = `${whosTurn}'s turn`;
  } else {
    whosTurn = "X";
    currentTurn.innerHTML = `${whosTurn}'s turn`;
  }
}

document.getElementById("clear").addEventListener('click', clearGame);

function clearGame() {
  currentTurn.innerHTML = "X's turn";
	const allSquares = document.querySelectorAll(".square-contents");
  
  for (let i = 0; i < 9; i++) {
    allSquares[i].innerHTML = "";
    document.getElementById(`square${i + 1}`).addEventListener('click', fillSquare);
  }

  winMessage.innerHTML = '';
  someoneWon = false;
  whosTurn = 'X';
}


for (let i = 1; i < 10; i++) {
  document.getElementById(`square${i}`).addEventListener('click', fillSquare);
}



/*

event listeners for click on each box
******
THIS IS A STATE
when clicked it should make O or X appear
O and X should alternate
display whose turn it is
*******
display when someone wins (win logic)
clear button event listener
should clear the board

bonus functionality:
Choose who goes first (X or O)

*/
