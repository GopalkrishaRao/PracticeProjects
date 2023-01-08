import React, {useState} from 'react'

// Prop drilling
export default function Propdrill() {
    const [brandname]= useState("Amezon")
  return (

    <div>
        <h1 >Hello &#91; Prop drilling 	&#93;</h1>
        <Child brand={brandname}/>
    </div>
  )
};


const Child=({brand})=> {
    return (
      <div>
          <h1>Child: </h1>
          <Grandchild brand1={brand}/>
      </div>
    )
  };


const Grandchild = ({brand1})=>{
    return(
        <>
        <div>
            <h1>Grand Child : {brand1}</h1>
        </div>
        </>
    )
}




