import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCiCircle, AiOutlineCloseCircle, AiOutlineWarning, AiOutlineClose } from 'react-icons/ai';
import './style.css';

const icons={
    success: <AiOutlineCheckCircle/>,
    info : <AiOutlineCiCircle/>,
    warning:<AiOutlineWarning/>,
    error:<AiOutlineCloseCircle/>
}


export default function Notification({type="info", message, onClose=()=>{}}) {
  return (
    <>
    <div className={`notification ${type}`}>
      {icons[type]}
      {message}
      <AiOutlineClose 
        color='while' 
        className='closeBtn'
        onClick={()=>onClose()}/>
    </div>
    </>
  )
}
