import React, {useState } from 'react'

export default function CheckBoxDelete() {
    const tech=["html", "CSS", "JavaScript", "React", "Angular"];

 

    const [newTech, setNewTech]=useState(tech);

    function handleClick(e){
       if(document.getElementById(`checkboxitem${e}`).checked){
           const updatedTech = newTech.filter((curEle,i)=>i!==e);
           setNewTech(updatedTech);
        }
    };

  return (
    <>
        <div>Check Box Delete</div>
        {
            newTech.map((item, i)=>{ 
                return(
                    <li key={i}>
                        <input id={`checkboxitem${i}`} type='checkbox'/>
                        <span>{item}</span>
                        <button onClick={()=>handleClick(i)}>Delete</button>
                    </li>

                )
            })
        }
    
    </>
  )
}
