import {useState} from "react";
import "./Usestate.css"

function Usestate(){
  const [counte, setCount] = useState(0)

    return(
        <>
        <div className='App'>
          <header>
            <h1>
              Counter app using State/ Hooks
            </h1>
          </header>
          <h2>Current value of count is {counte}</h2>
          <button onClick={()=>setCount(0)}> Reset Counter</button>
          <button onClick={()=>counte>=5 ? null :setCount(counte + 1)}> Increase Counter</button>
          <button onClick={()=>counte<=0 ? true : setCount(counte - 1)}> Decrease Counter</button>
        </div>
    </>

    )
};

export default Usestate;
