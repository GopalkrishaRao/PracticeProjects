import Ball from "./Ball.js";
import Paddle from "./paddle.js";

const ball = new Ball(document.getElementById('ball'));
const playerPaddle = new Paddle(document.getElementById('player-paddle'));
const computerPaddle = new Paddle(document.getElementById('computer-paddle'));
const playerScoreElem = document.getElementById('player-score') ;
const computerScoreElem = document.getElementById('computer-score') ;

let lastTime
function update(time){
    if(lastTime!=null){
        const delta= time - lastTime
        // update the ball position
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
        // ball.update(delta)

        // computer paddle movement based on ball movement on y axis and delta
        computerPaddle.update(delta, ball.y)

        // check weather ball touches wall insted of player paddle
        if(isLose()) handleLost()

        // background color change
        const hue = parseFloat( getComputedStyle(document.documentElement).getPropertyValue('--hue'))
        
        document.documentElement.style.setProperty('--hue', hue + delta*0.01)
    }
    lastTime = time
    window.requestAnimationFrame(update)
};

//  if ball goes out of player peddle the player loose
function isLose(){
    const rect = ball.rect()
    return rect.right>=window.innerWidth || rect.left <= 0 
};

function handleLost(){
    const rect =ball.rect()
    // update score
    if (rect.right>=window.innerWidth){
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1 
    }
    else{
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1 
    }
    // update ball position to center
    ball.reset();
    // update paddle position to center
    computerPaddle.reset()

}


// movement of player paddle

document.addEventListener("mousemove", e=>{
    // position is css property by dividing with innerHeigh and *100 converting it to value between 0-100
    playerPaddle.position = (e.y/window.innerHeight)*100
} )

window.requestAnimationFrame(update);