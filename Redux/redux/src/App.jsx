import { useSelector, useDispatch } from "react-redux"

export default function App() {
 const counter = useSelector((state)=>state.counter)

 const dispatch = useDispatch();
 const increment = ()=>{
  dispatch({type:"INC"})
 }
 const decrement =()=>{
  dispatch({type:"DEC"})
 }
 const reset = ()=>{
  dispatch({type:"RES"})
 }
 const add10 = ()=>{
  dispatch({type:"ADD10", payload:10})
 }
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add10}>Add 10</button>
    </>
  )
}
