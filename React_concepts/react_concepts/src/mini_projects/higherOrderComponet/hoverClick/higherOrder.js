import React, { useState } from 'react'

const hOCHoverClick=(WraperComponent)=> {
    return function HOCHoverClick(props){
        const { initialState, incrementTimes } = props;

        const [number, setNumber]= useState(initialState);
        const increment = ()=>{
            setNumber (number+incrementTimes);
        }

        return <WraperComponent number={number} increment={increment}/>
    }
}

export default hOCHoverClick;
