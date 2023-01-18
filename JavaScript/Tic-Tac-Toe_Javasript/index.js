const x_class='x';
const circle_class = 'circle';
const cellElemnts= document.querySelectorAll('[data-cell]');
let circleTurn;
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const restartButton = document.getElementById('restartButton')

const winningMessageElement=document.getElementById('winningMessage')
const winning_combination= [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]
]

startGame()
restartButton.addEventListener('click', startGame)


function startGame(){
    //** to start with x and to view hover x for first time 
    circleTurn=false
    // **

    cellElemnts.forEach(cell=>{
        cell.classList.remove(x_class)
        cell.classList.remove(circle_class)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true})
    })

    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
};

function handleClick(e){
    const cell= e.target;
    const currentClass = circleTurn ? circle_class : x_class;
    // placeMark
    placeMark (cell, currentClass)

    if (checkWin(currentClass)){
        endGame(false)
    }else if (isDraw()){
        endGame(true)
    }
    else{
        swapTurns()
        setBoardHoverClass()
    }
}

function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText='Draw!'
    }
    else{
        winningMessageTextElement.innerText = `${circleTurn ?"O": "X"} Wins !!`
    }
    winningMessageElement.classList.add('show')

}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
};
function isDraw(){
    return [...cellElemnts].every(cell=>{
        return cell.classList.contains(x_class) ||
         cell.classList.contains(circle_class)

    })
}

function swapTurns(){
    circleTurn = !circleTurn
};

function setBoardHoverClass(){
    board.classList.remove(x_class)
    board.classList.remove(circle_class)
    if(circleTurn){
        board.classList.add(circle_class)
    }
    else{
        board.classList.add(x_class)
    }
};

function checkWin(currentClass){
   return winning_combination.some(combination=>{
        return combination.every(index =>{
            return cellElemnts[index].classList.contains(currentClass)
        })
    })
}