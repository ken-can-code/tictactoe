let gameState = {
  square1: null,
  square2: null,
  square3: null,
  square4: null,
  square5: null,
  square6: null,
  square7: null,
  square8: null,
  square9: null
};

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

const clearButton = document.getElementById('clear');

let wins = winConditions;

const currentTurn = document.getElementById('current-turn');

const currentMove = () => clickCounter % 2 === 0 ? 'O' : 'X';

const changeMoveDisplay = () => currentTurn.innerHTML = currentMove();

let clickCounter = 0;

const changeSquare = event => {
  if (!gameState[event.target.id]) {
    const clickId = event.target.id;
    const clickedSquare = document.getElementById(clickId);
    clickedSquare.firstElementChild.innerHTML = currentMove();
    gameState[clickId] = currentMove();
    clickCounter += 1;
    changeMoveDisplay();
    if (clickCounter >= 5) winChecker();
  }
};
let loopCounter = 0;
const winChecker = () => {
  for (let condition of wins) {
    loopCounter += 1;
    let space1 = gameState[condition[0]];
    let space2 = gameState[condition[1]];
    let space3 = gameState[condition[2]];
    if (space1 === space2 && space2 === space3 && space1 !== null) {
      console.log('win condition being checked');
      const win = document.getElementById('win');
      win.innerHTML = space1 + ' wins!'
      for (let key in gameState) {
        if (!gameState[key]) gameState[key] = 'filler';
      }
      console.log(gameState);
      break;
    }
  }
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
}

currentTurn.innerHTML = currentMove();
square1.addEventListener('click', changeSquare);
square2.addEventListener('click', changeSquare);
square3.addEventListener('click', changeSquare);
square4.addEventListener('click', changeSquare);
square5.addEventListener('click', changeSquare);
square6.addEventListener('click', changeSquare);
square7.addEventListener('click', changeSquare);
square8.addEventListener('click', changeSquare);
square9.addEventListener('click', changeSquare);
clearButton.addEventListener('click', clearAction);