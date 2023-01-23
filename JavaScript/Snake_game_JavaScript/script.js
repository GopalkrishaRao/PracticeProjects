import {snakeSpeed, update as updateSnake, draw as drawSnake} from './snake.js';
import { update as updateFood, draw as drawFood  } from './food.js';

let lastRenderedTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime){
    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime-lastRenderedTime)/1000;

    if(secondsSinceLastRender < 1 / snakeSpeed) return

    console.log("render");
    lastRenderedTime = currentTime;

    update()
    draw()

};
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
}

function draw(){
    // make tail to disapper or shift to next place when moves
    gameBoard.innerHTML = '';

    // makes the sake div visible
    drawSnake(gameBoard)
    drawFood(gameBoard)
}