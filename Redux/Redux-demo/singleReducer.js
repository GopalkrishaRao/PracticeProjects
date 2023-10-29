const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED="CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED ='ICECREAM_ORDERED';
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED';

// Action 
//  an object
function orderCake(){
return{
        type: CAKE_ORDERED,
        payload:1
    };
};

function restockCake(qty=1){
    return{
        type: CAKE_RESTOCKED,
        payload:qty
    }
}

function orderIceCream(qty=1){
    return{
        type:ICECREAM_ORDERED,
        payload: qty
    }
};
function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload: qty
    }
}

const initialState = {
    numberOfCake:10,
    numberOfIceCreams:20
}
// Reduccer

//  A function takes prev state and return new state  
// (prevState, action)= > new state

const reducer = (state=initialState, action)=>{
    switch (action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCake: state.numberOfCake-1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCake: state.numberOfCake+ action.payload
            }
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams-1,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams+ action.payload
            }
        default:
            return state
    }
};


const store = createStore(reducer)
console.log('Initial State', store.getState());

const unscribe = store.subscribe(()=>
console.log('Update state', store.getState())
)



const actions = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch);

actions.orderCake()
actions.orderCake()
actions.restockCake(5)
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(5)
unscribe();