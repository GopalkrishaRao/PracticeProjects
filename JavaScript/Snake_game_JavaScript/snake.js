export const snakeSpeed=2;
const snakeBody = [{x:11, y:11}]

export function update(){
    // makes the snake body div to move
    for(let i=snakeBody.length-2; i>=0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }

    snakeBody[0].x += 0;
    snakeBody[0].y += 1;
}

export function draw(gameBoard){
    // snake Body
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}
