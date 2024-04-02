import React, {useEffect, useState} from 'react';

// custom Hook
const useDebounce=(input, delay=300)=>{
    const [debounceValue, setDevounceValue]=useState("");
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDevounceValue(input)
        },delay);

       return ()=>clearTimeout(timer)
    },[input,delay])
    return debounceValue
}

export default function Debounce() {
    const [inputValue, setInputValue]=useState("");
   const debounceValue=useDebounce(inputValue)
    

    const handleChage=(e)=>{
        let updated=e.target.value
        setInputValue(updated)
    };

   
    const handleClear=()=>{
        setInputValue("")
    }
    
  return (
    <>
        <div>Debounce</div>
        <input
            value={inputValue}
            type='text'
            placeholder='Enter'
            onChange={handleChage}
        />
        <button onClick={handleClear}>Clear</button>
        <div>
            <h2>You have entered: 
                <span>{debounceValue}</span>
            </h2>
        </div>
    </>
  )
}
