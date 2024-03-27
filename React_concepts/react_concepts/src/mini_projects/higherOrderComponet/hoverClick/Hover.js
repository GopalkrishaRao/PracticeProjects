import React from 'react';
import hOCHoverClick from './higherOrder';


function Hover(props) {
    const {number, increment}=props
   
  return (
    <>
        <div onMouseOver={increment} 
            style={{background:"orange"}}>
            You have Hoverd {number} times
        </div>
    </>
  )
};

export default hOCHoverClick(Hover);
