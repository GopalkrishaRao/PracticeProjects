import React from 'react';
import hOCHoverClick from './higherOrder';

function Click(props) {
   const {number, increment}=props;

  return (
    <>
     <button onClick={increment}> You have clicked {number} Times</button>
    </>
  )
};

export default hOCHoverClick(Click)
