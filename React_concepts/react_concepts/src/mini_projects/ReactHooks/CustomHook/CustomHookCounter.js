import React, { useState } from 'react'

const useCounter = (initial)=>{
    const [number, setNumber] = useState(initial);
    const increase = ()=>setNumber(number+1);
    const reset = ()=>setNumber(0);
    const decrease = ()=>setNumber(number-1);


    return {number, increase, reset, decrease}
}

export default function CustomHookCounter() {
    const {number, increase, reset, decrease}=useCounter(0)
  return (
    <>
    <h2>Custom Hook Counter</h2>
    <p> {number} </p>
    <div>
        <button onClick={increase}>
            Increment
        </button>
        <button onClick={reset}>
            Reset
        </button>
        <button onClick={decrease}>
            Decrement
        </button>
    </div>
    </>
  )
}
