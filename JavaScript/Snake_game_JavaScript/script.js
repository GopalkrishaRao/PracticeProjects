import {snakeSpeed, update as updateSnake, draw as drawSnake, getSankeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood  } from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderedTime = 0;
let gameOver=false;
const gameBoard = document.getElementById('game-board');

function main(currentTime){
    if (gameOver){
        if(confirm('You lost. Press Ok to restart.')){
            // if trun trure refresh page and restart game
            window.location='./'
        };
        return
    };

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime-lastRenderedTime)/1000;

    if(secondsSinceLastRender < 1 / snakeSpeed) return;

    lastRenderedTime = currentTime;

    update()
    draw()
};
window.requestAnimationFrame(main)

function update(){
    updateSnake();
    updateFood();
    checkDeath();
};

function draw(){
    // make tail to disapper or shift to next place when moves
    gameBoard.innerHTML = '';

    // makes the sake div visible
    drawSnake(gameBoard);
    drawFood(gameBoard);
};

function checkDeath(){
    gameOver = outsideGrid(getSankeHead())|| snakeIntersection();
};