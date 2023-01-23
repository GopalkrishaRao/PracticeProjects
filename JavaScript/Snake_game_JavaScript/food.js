import { onSnake, expandSnake } from "./snake.js";
import { randomGridPositon } from "./grid.js";

let food = getRandomFoodPosition();
// let food = {x:1, y:4}
const expansionRate = 1;

export function update(){
    // chek if snake is on the top  of food div
    if(onSnake(food)){
        expandSnake(expansionRate)
    // create a food in differt location
        food = getRandomFoodPosition()
    }

}

export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

};

function getRandomFoodPosition(){
    let newFoodPosition

    // prevent creation new food on the snake body
    while (newFoodPosition ==null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPositon()
    }

    return newFoodPosition
}