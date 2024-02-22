import React, { useState } from 'react';
import './folder.css';

 const Folder = (props) => {
    const {explorer} =props;

    const[expand, setExpand]=useState(false);

  if(explorer.isFolder){
    return (
    <div style={{marginTop:'5'}}>
        <div>
            <span 
                className='folder'
                onClick={()=>setExpand(!expand)}
                > 
            📁 {explorer.name}
            </span>
        </div>
        <div style={{display: expand ? "block" : "none", paddingLeft:"25px"}}>
            {explorer.items.map((exp)=>{
            return(
                <Folder 
                    explorer={exp}
                    key={exp.id} 
                />
               
            )
            })}
        </div>
    </div>
    )
  }else{
    return(
    <span className='file'>
        📄 {explorer.name}
    </span>
    )
}
};

export default Folder;
