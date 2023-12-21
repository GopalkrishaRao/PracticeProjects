import React, { useState } from 'react'

const useCustom = (inital)=>{
    const [count, setCount]= useState(0)
    const increment= ()=>{
        setCount (count+1)
    }
    const decremt = ()=>setCount(count-1)
    const reset = ()=>setCount(0)

    return {increment, count,decremt,reset}
}
export default function CustomHook() {
    const {increment, count,decremt,reset}= useCustom(0)
  return (
    <>
        <h2>Custom Hook Counter </h2>
        <p>{count}</p>  
        <button onClick={increment}>Increment</button>  
        <button onClick={reset}>Reset</button>  
        <button onClick={decremt}>Decrement</button>  
    </>
  )
}
