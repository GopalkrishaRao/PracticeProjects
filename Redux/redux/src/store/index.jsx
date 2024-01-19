import {createStore} from 'redux';

const reducerFn = (state={counter:0}, action)=>{
    switch (action.type){
        case "INC":
            return {counter:state.counter + 1}
        case "DEC":
            return {counter:state.counter-1}
        case "RES":
            return {counter:0}
    default:
        return state
        
    }
};

const store = createStore(reducerFn);
export default store