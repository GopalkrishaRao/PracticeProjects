let inputDirection = {x:0, y:0};
let lastInputDirection ={x:0, y:0};

// movent based on kay board input
window.addEventListener('keydown', e=>{
    switch (e.key){
        case 'ArrowUp':
            // if conditin prevent up - down immidiate reversal 
            if(lastInputDirection.y !==0)break;
            inputDirection = {x:0, y:-1}
            break;
        case 'ArrowDown':
            if(lastInputDirection.y !==0)break;
            inputDirection = {x:0, y:1}
            break;
        case 'ArrowLeft':
            // if conditin prevent left-right immidiate reversal
            if(lastInputDirection.x !==0)break;
            inputDirection = {x:-1, y:0}
            break;
        case 'ArrowRight':
            if(lastInputDirection.x !==0)break;
            inputDirection = {x:1, y:0}
            break;
    };
});

export function getInputDirection(){
    // prevent up - down immidiate reversal
    lastInputDirection = inputDirection;

    return inputDirection;
};