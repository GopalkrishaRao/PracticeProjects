import { onSnake, expandSnake } from "./snake.js";


let food = {x:10, y:10};
const expansionRate = 1;

export function update(){
    // chek if snake is on the top  of food div
    if(onSnake(food)){
        expandSnake(expansionRate)
    // create a food in differt location
        food = {x:15, y:12}
    }

}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}