let gameState = {
  square1: '',
  square2: '',
  square3: '',
  square4: '',
  square5: '',
  square6: '',
  square7: '',
  square8: '',
  square9: ''
};

const square1 = document.getElementById('square1');
const square2 = document.getElementById('square2');
const square3 = document.getElementById('square3');
const square4 = document.getElementById('square4');
const square5 = document.getElementById('square5');
const square6 = document.getElementById('square6');
const square7 = document.getElementById('square7');
const square8 = document.getElementById('square8');
const square9 = document.getElementById('square9');
const currentTurn = document.getElementById('current-turn');

let clickCounter = 0;
const currentMove = () => clickCounter % 2 === 0 ? 'O' : 'X';

const changeMoveDisplay = () => currentTurn.innerHTML = currentMove();

const changeSquare = event => {
  if (!gameState[event.target.id]) {
    const clickId = event.target.id;
    const clickedSquare = document.getElementById(clickId);
    clickedSquare.firstElementChild.innerHTML = currentMove();
    gameState[clickId] = currentMove();
    clickCounter += 1;
    changeMoveDisplay();
  }
};

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
