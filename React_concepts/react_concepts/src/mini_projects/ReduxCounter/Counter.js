import React from 'react';
import {increment, decrement} from './Action/action';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
  const myState= useSelector((state)=>state.changeNumber);
  const dispatch  = useDispatch();
  return (
    <>
      <h1>Count:{myState}</h1>
      <button onClick={()=>dispatch (increment())}>
          Increment
      </button>
      <button onClick={()=>dispatch (decrement())}>
          Decrement
      </button>
    </>
  )
}
