import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action/action";

export default function Counter() {
  const myState= useSelector((state)=>state.changeNumber);

  const dispatch = useDispatch()
  return (
    <>
      <h2>Simple Counter with Redux</h2>
        <button
           onClick={()=>dispatch(increment())}>
            Increment
        </button>

        <span>{myState}</span>
        
        <button
          onClick={()=>dispatch(decrement())}>
            Decrement
        </button>
    </>
  )
}
