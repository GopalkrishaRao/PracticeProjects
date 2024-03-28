import React, { useEffect, useState } from 'react';
import { sldieImageData } from './components/imagesData';
import"./components/style.css";

export default function ImageSlider() {
    
    const [curImg, setCurImg]=useState(0)

    const handleNext=()=>{
        curImg===sldieImageData.length-1 ? setCurImg(0) : setCurImg(curImg+1)

    };

    const handlePre=()=>{
        curImg===0 ? setCurImg(sldieImageData.length-1) : setCurImg(curImg-1)
    };

    
    useEffect(() => {
        const timer = setInterval(handleNext, 3000);
    
        return () => clearInterval(timer);
    }, [curImg]);
    
  return (
    <>
    <div>ImageSlider</div>
    <img
        src={sldieImageData[curImg].imageUrl}
        alt={sldieImageData[curImg].name}
        />
    <h2>{sldieImageData[curImg].name}</h2>


    <button onClick={handleNext}>Next </button>
    <button onClick={handlePre}>Previous </button>

    </>
  )
}
