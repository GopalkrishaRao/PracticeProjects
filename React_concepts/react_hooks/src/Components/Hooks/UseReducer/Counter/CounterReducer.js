import React, {useReducer} from 'react';

const ACTIONS={
    INCREMENT : "increment"
}

const reducerFn = (state, action)=>{
    switch (action){
        case ACTIONS.INCREMENT:
            return ({count: state.count+1})
        case "decrement":
            return ({count: state.count-1})
        case "reset":
            return ({count: state.count = 0})
        default:
            return state
    }

}
export default function CounterReducer() {
    const [state, dispatch]= useReducer(reducerFn, {count:0})
  return (
    <>
    <div>Simple Counter With Use Reducer</div>

    <p>{state.count}</p>
    <button onClick={()=>dispatch(ACTIONS.INCREMENT)}>
        increment
    </button>
    <button onClick={()=>dispatch('reset')}>
        Reset
    </button>
    <button onClick={()=>dispatch('decrement')}>
        Decrement
    </button>
    </>
  )
}
