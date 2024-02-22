import React, { useState } from 'react';
import './folder.css';

 const Folder = (props) => {
    const {explorer, handleInsertNode} =props;

    const[expand, setExpand]=useState(false);

    const [showInput, setShowInput]=useState({
        visible:false,
        isFolder:null
    });

// stop opening filder on click of folder/ file button

const handleNewFolder = (e, isFolder)=>{
    e.stopPropagation();
    if (!expand) {
        setExpand(true);
      }

    setShowInput({
        visible:true,
        isFolder
    })
};

const onAddFolder=(e)=>{
    if(e.keyCode===13 && e.target.value){
        handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
        setShowInput({...showInput, visible:false})
    }

}

  if(explorer.isFolder){
    return (
    <div style={{marginTop:'5'}}>
        <div  className='folder'>
            <span 
                onClick={()=>setExpand(!expand)}
                > 
                📁 {explorer.name}
            </span>
            <div>
                <button onClick={(e)=>handleNewFolder(e, true)}>
                    Folder +
                </button>
                <button onClick={(e)=>handleNewFolder(e, false)}>
                    File +
                </button>
            </div>
        </div>
        <div style={{display: expand ? "block" : "none", paddingLeft:"25px"}}>
            {
            showInput.visible && (
            <div className='inputContainer'>
                <span>
                {showInput.isFolder?"📁" : "📄"}
                </span>
                <input
                 className='inputContainer__input'
                 type='text'
                 onKeyDown={onAddFolder}
                 autoFocus
                 onBlur={()=>setShowInput({...showInput, visible:false})}
                 />
            </div> 
            )
            }
            {explorer.items.map((exp)=>{
            return(
                <Folder 
                    handleInsertNode={handleInsertNode}
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
