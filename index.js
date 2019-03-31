const gameState = {};

for (let i = 1; i <= 9; i += 1) {
  gameState['square' + i] = null;
}

let winConditions = [
  ['square1', 'square2', 'square3'],
  ['square4', 'square5', 'square6'],
  ['square7', 'square8', 'square9'],
  ['square1', 'square4', 'square7'],
  ['square2', 'square5', 'square8'],
  ['square3', 'square6', 'square9'],
  ['square1', 'square5', 'square9'],
  ['square3', 'square5', 'square7']
];

const clickOrTap = document.getElementById('click-or-tap');
const clearButton = document.getElementById('clear');
const winMessage = document.getElementById('win');
const currentTurn = document.getElementById('current-turn');
const currentMove = () => clickCounter % 2 === 0 ? 'O' : 'X';
const changeMoveDisplay = () => currentTurn.innerHTML = currentMove();
let wins = winConditions;
let clickCounter = 0;

const changeSquare = event => {
  if (!gameState[event.target.id]) {
    const clickId = event.target.id;
    const clickedSquare = document.getElementById(clickId).firstElementChild;
    if (currentMove() === 'O') clickedSquare.innerHTML = currentMove();
    else clickedSquare.innerHTML = '<span style=\'color:blue\'>' + currentMove() + '</span>';
    gameState[clickId] = currentMove();
    clickCounter += 1;
    changeMoveDisplay();
    if (clickCounter >= 5) winChecker();
  }
};
const winChecker = () => {
  let gameOver = false;
  for (let condition of wins) {
    let space1 = gameState[condition[0]];
    let space2 = gameState[condition[1]];
    let space3 = gameState[condition[2]];
    if (space1 === space2 && space2 === space3 && space1 !== null) {
      if (space1 === 'X') winMessage.innerHTML = '<span style=\'color:blue\'>' + space1 + ' wins!</span>';
      else winMessage.innerHTML = space1 + ' wins!'
      for (let key in gameState) {
        if (!gameState[key]) gameState[key] = 'filler';
      }
      gameOver = true;
      break;
    }
    else if (clickCounter === 9) {
      winMessage.innerHTML = 'It\'s a draw!';
      gameOver = true;
    }
  }
  if (gameOver) clickOrTap.innerHTML = 'Click clear to play again!';
}

const clearAction = () => {
  // wins = winConditions; //may need to activate if begin to truncate possibilities
  const winMessage = document.getElementById('win');
  winMessage.innerHTML = '';
  currentTurn.innerHTML = 'O';
  clickCounter = 0;
  for (let key in gameState) {
    gameState[key] = null;
    let square = document.getElementById(key);
    square.firstElementChild.innerHTML = '';
  }
  clickOrTap.innerHTML = 'Click or tap on the above board to play a move!';
}

currentTurn.innerHTML = currentMove();
const squares = [
  square1, square2, square3, square4, square5, square6, square7, square8, square9
];

for (let i = 0; i < 9; i += 1) {
  squares[i].addEventListener('click', changeSquare);
}

clearButton.addEventListener('click', clearAction);