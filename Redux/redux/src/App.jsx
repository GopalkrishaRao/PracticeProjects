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
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      {console.log(counter)}
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}
