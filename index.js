let gameState = {
  square1: "",
  square2: "",
  square3: "",
  square4: "",
  square5: "",
  square6: "",
  square7: "",
  square8: "",
  square9: ""
};
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

let clickCounter = 0;
const currentMove = () => {
  if (clickCounter % 2 === 0) return "O";
  else return "X";
};

const changeMoveDisplay = () => {
  currentTurn.innerHTML = currentMove();
};

const changeSquare1 = () => {
  square1.firstElementChild.innerHTML = currentMove();
  clickCounter += 1;
  changeMoveDisplay();
};

const changeSquare2 = () => {
  square2.firstElementChild.innerHTML = currentMove();
  clickCounter += 1;
  changeMoveDisplay();
};

const changeSquare3 = () => {
  square3.firstElementChild.innerHTML = currentMove();
  clickCounter += 1;
  changeMoveDisplay();
};

const changeSquare4 = () => {
  square4.firstElementChild.innerHTML = currentMove();
  clickCounter += 1;
  changeMoveDisplay();
};

const changeSquare5 = () => {
  square5.firstElementChild.innerHTML = currentMove();
  clickCounter += 1;
  changeMoveDisplay();
};

const changeSquare6 = () => {
  square6.firstElementChild.innerHTML = currentMove();
  clickCounter += 1;
  changeMoveDisplay();
};

const changeSquare7 = () => {
  square7.firstElementChild.innerHTML = currentMove();
  clickCounter += 1;
  changeMoveDisplay();
};

const changeSquare8 = () => {
  square8.firstElementChild.innerHTML = currentMove();
  clickCounter += 1;
  changeMoveDisplay();
};

const changeSquare9 = () => {
  square9.firstElementChild.innerHTML = currentMove();
  clickCounter += 1;
  changeMoveDisplay();
};

currentTurn.innerHTML = currentMove();
square1.addEventListener("click", changeSquare1);
square2.addEventListener("click", changeSquare2);
square3.addEventListener("click", changeSquare3);
square4.addEventListener("click", changeSquare4);
square5.addEventListener("click", changeSquare5);
square6.addEventListener("click", changeSquare6);
square7.addEventListener("click", changeSquare7);
square8.addEventListener("click", changeSquare8);
square9.addEventListener("click", changeSquare9);
