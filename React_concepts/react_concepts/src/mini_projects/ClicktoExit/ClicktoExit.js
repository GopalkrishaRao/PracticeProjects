import React, { useState } from 'react'
import PopuupBox from './component/PopuupBox';

const ClicktoExit = () => {
    const [click, setClick]= useState(false);

return (
    <>
    <div>ClicktoExit</div>
    <button onClick={()=>setClick(true)}>
        Clik to Open Popup Box
    </button>
    {click && <PopuupBox setClick={setClick} />}
    
    </>
  )
}
export default ClicktoExit;