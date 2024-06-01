import React from 'react';
// import Notification from './components/Notification';
import useNotification from './components/hooks/useNotification';

export default function Toast() {

    const {NotifictionComponent, triggerNotification}=useNotification()
  return (
    // Custom hook
    <>
    <div>
        Toast
    </div>
    <button
        onClick={()=>
            triggerNotification({
                type:"success",
                message: "File Sent Successfully",
                duration:3000
            })
        }
    >
        Trigger Success
    </button>
    <button
        onClick={()=>
            triggerNotification({
                type:"error",
                message: "Error",
                duration:3000
            })
        }
    >
        Trigger Error
    </button>
    {NotifictionComponent}
    </>

  )
}
