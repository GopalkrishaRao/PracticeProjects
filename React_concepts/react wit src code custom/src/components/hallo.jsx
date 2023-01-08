// import React from "react";
// import ReactDOM from "react-dom";
import Button from "./button";


function Hello(){
    return(
        <>       
    <h1 className="rounded-2xl text-center" style={{color:"orange", border:"2px solid black", background:"black"}}>Hallo React Test</h1>
        <Button title = "Increase" linke="click me" externallink="https://github.com/"/>
        <Button title="decrease" linke="I am a link" />

    </>
 
    )
};

export default Hello