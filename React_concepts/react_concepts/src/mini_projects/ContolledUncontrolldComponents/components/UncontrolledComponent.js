import React, { useState, useRef } from 'react'

export default function UncontrolledComponent() {
  const [name, setName]= useState("");
  const input = useRef(null);

  const handleClick= (e)=>{
    e.preventDefault();
    setName(input.current.value)
  }
  
  return (
    <>
    <div>UncontrolledComponent</div>
    <form>
      <input
        ref={input}
        type='text'
        />
        <br/>
        <input
          type='submit'
          onClick={handleClick}
          />

    </form>
    {

      name && 
        <div>The output of Uncontrolled Component: 
          <br/>
          {name}
        </div>
    }

    </>
  )
}
