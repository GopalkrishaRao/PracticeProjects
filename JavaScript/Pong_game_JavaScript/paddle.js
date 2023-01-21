const SPEED = 0.02

export default class Paddle{
    constructor(paddleElem){
        this.paddleElem=paddleElem
        this.reset()
    }
    //  paddle movement based on mouse position by changing the value of position property in css
    get position() {
        return parseFloat(
          getComputedStyle(this.paddleElem).getPropertyValue("--position")
        )
      }

    set position(value) {
        this.paddleElem.style.setProperty("--position", value)
      }

    //   making the ball to bounce when it hit the paddle

    rect(){
           return this.paddleElem.getBoundingClientRect()
    }

    //   reset the paddle to the center of the screen
    reset(){
        this.position=50
    };

    //  computer paddle movement 
    update(delta, ballHeight){
        // With below code paddle will move to the position of ball instantaneously so it is impossible to win against computer
        // this.position=ballHeight

        // With speed variable the computer paddle is made to move with a limited speed

        this.position += SPEED * delta * (ballHeight - this.position)

    }
}