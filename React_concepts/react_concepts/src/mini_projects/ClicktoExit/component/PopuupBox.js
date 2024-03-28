import React, { useEffect } from 'react';
import './style.css';

export default function PopuupBox({setClick}) {

    useEffect(()=>{
        function onKeyDown(e){
            if(e.keyCode===27){
                setClick(false);
            };
        };
        document.addEventListener("keydown", onKeyDown);

        return ()=>document.removeEventListener("keydown", onKeyDown)
    },[]);

    const handleClose= (e)=>{
        if (e.target.className !== "popUp") {
            e.stopPropagation();
            setClick(false);
        }
    }

  return (
    <>
    <div className='backDrop' onClick={handleClose}>

    <div className='popUp' >
    <div className='header'>
        <div>PopuupBox</div>
        <div>
            <button onClick={()=>setClick(false)}>
                Close X
            </button>
        </div>
    </div>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    </div>
    </div>


    </>
  )
}
