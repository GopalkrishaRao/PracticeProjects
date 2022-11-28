import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import Hello from "./components/hallo";
import "./components/button.css"


function App(){
    return (
        <>
        <Hello/>
        </>
    )
};



ReactDOM.render(<App/>, document.getElementById("root"))