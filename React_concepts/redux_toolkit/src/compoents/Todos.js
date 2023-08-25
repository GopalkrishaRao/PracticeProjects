import React from 'react';
import { UseSelector } from 'react-redux/es/hooks/useSelector';

function Todos() {

  const todos=  useSelector((state)=>{
        state.todos
    })
  return (
    <div>Todos</div>
  )
}

export default Todos