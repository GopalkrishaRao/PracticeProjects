import React, { useEffect, useState } from 'react';
import './progressbar.css'

 const Progressbar = () => {
    const [progress, setProgress]=useState(0);
    // const handleLoad = ()=>{
     useEffect(()=>{
       const progresPercent= setInterval(() => {
            setProgress((progress)=>{
                if(progress<100){ 
                    return  progress+1
                }else{
                    clearInterval(progresPercent);
                    return progress  
                }
            })
        }, 100);
    },[])
    // }
  return (
    <>
    <div className='outer'>
    <h1>Progressbar</h1>
        <div className='progressBar'>
            <span 
            className='progressColor'
            style={{width:`${progress}%`}}
            role='progressbar'
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            // accebality tool
            ></span>
           <div/>
        </div>
            <div className='progressPercent' style={{color:`${progress<=50? '#000': '#fff'}`}}>{progress}%</div>
        {/* <button onClick={handleLoad}>Load</button> */}
    </div>
    </>
  )
}
export default Progressbar;