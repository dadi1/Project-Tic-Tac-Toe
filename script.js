const X_CLASS = 'x';
const O_CLASS = 'circle'
const WINNING_COMBINATION = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const cellElements = document.querrySelectorAll('[data-cell]');
const board = document.getElementById("board");
const winningMEssageTextElement = document.querySelector
let circleTurn;

startGame();

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener("click", handleClick, {once:true})
    })
    setBoardHooverClass();
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? O_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    }
    //f
    //f
    switchTurns();
    setBoardHooverClass();
}

function endGame(draw){
    if (draw) {
        winningMEssageTextElement.innterText = "draw!"
    } else {
        winningMEssageTextElement.innterText = `${circleTurn ? "O" : "X" } player wins!`
    }
}

function isDraw() {
    return cellElements.every(cell =>{
        return cell.classList.container(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function switchTurns() {
    circleTurn = !circleTurn;
}

function setBoardHooverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
   return WINNING_COMBINATION.some(combination => {
   
    return combination.every(index =>{
        return cellElements[index].classList.contain(currentClass);
    })
   })
}