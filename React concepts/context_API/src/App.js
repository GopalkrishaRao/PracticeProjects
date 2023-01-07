import React, {Fragment} from "react";
import Provider from "./contextAPI/provider";
import Context from "./contextAPI/context";

const Agents = ()=>{
  return <AgentOne/>
};
const AgentOne = ()=>{
  return <AgentTwo/>
};
const AgentTwo = ()=>{
  return <AgentBond/>
};
const AgentBond = ()=>{
  return (
    <Context.Consumer>
      {
        //call back function ()=>()
        (context)=>(
          // Can use <div> insted of fragment
          <Fragment>
            <h3>Agent Information</h3>
            <p>
              Mission Name: {context.data.mname}
            </p>
            <h2>Mission Status: {context.data.accept}</h2>
            <button onClick={context.isMissionAccepted}>Choose to accept</button>

          </Fragment>

        )
      }
    </Context.Consumer>
  )
};



export default function App() {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
          <Agents/>
      </Provider>
    </div>
  )
}
