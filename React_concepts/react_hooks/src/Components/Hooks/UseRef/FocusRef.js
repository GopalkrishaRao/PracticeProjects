import React from 'react';
import {useRef, useEffect} from 'react'

export default function FocusRef() {
  
    const focusRef = useRef()
    useEffect(()=>{
        focusRef.current.focus()
    },[])

    const handleFoucs=()=>{
        focusRef.current.style.background="pink";
        focusRef.current.style.color="black";
    }

  return (
    <>
    <h2 >Use Ref Hook--Focus Ref</h2>
    <input ref={focusRef} onClick={handleFoucs} />
    </>
  )
}
