import React from 'react';
import Click from './hoverClick/Click';
import Hover from './hoverClick/Hover';

const Hoc = () => {
  return (
    <>
        <Click  initialState={0} incrementTimes={1}/>
        <Hover initialState={0} incrementTimes={2}/>
    </>
  )
};

export default Hoc;
