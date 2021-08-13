let whosTurn = "X";

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

currentTurn.innerHTML = "X's turn";

function fillSquare(event) {
  console.log('this is the event.target', event.target);
  event.target.children[0].innerHTML = whosTurn;
  switchTurn();
  event.target.removeEventListener("click", fillSquare);
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

function clearGame () {
  
  currentTurn.innerHTML = "X's turn";
	const wipeIt = document.querySelectorAll(".square-contents");
  
  for (let i = 0; i < 9; i++) {
    wipeIt[i].innerHTML = "";
    
  for (let i = 1; i < 10; i++) {
  
  document.getElementById(`square${i}`).addEventListener("click", fillSquare);
  whosTurn = 'X';
		}
  }
}


for (let i = 1; i < 10; i++) {
  document.getElementById(`square${i}`).addEventListener("click", fillSquare);
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
