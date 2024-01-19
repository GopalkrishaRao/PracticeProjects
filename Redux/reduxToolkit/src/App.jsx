import { actions } from "./store/index"
import { useSelector, useDispatch } from "react-redux"

export default function App() {
 const counter = useSelector((state)=>state.counter)

 const dispatch = useDispatch();
 const increment = ()=>{
  dispatch(actions.increment())
 }
 const decrement =()=>{
  dispatch(actions.decrement())
 }
 const reset = ()=>{
  dispatch(actions.reset())
 }
 const add10 = ()=>{
  dispatch(actions.add10(10))
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
