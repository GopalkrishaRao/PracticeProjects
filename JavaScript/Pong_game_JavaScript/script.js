import Ball from "./Ball.js";
import Paddle from "./paddle.js";

const ball = new Ball(document.getElementById('ball'));
const playerPaddle = new Paddle(document.getElementById('player-paddle'));
const computerPaddle = new Paddle(document.getElementById('computer-paddle'));

let lastTime
function update(time){
    if(lastTime!=null){
        const delta= time - lastTime
        // update the ball position
        ball.update(delta)
    }
    lastTime = time
    window.requestAnimationFrame(update)
};


// movement of player paddle

document.addEventListener("mousemove", e=>{
    // position is css property by dividing with innerHeigh and *100 converting it to value between 0-100
    playerPaddle.position = (e.y/window.innerHeight)*100
} )

window.requestAnimationFrame(update);