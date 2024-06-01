import Notification from "../Notification";
import { useCallback, useState } from "react";

const useNotification =()=>{
  const [notification, setNotification]=useState(null);


  let timer;

  const triggerNotification = useCallback((notificationProps)=>{
    clearTimeout(timer);
    setNotification(notificationProps)
    timer=setTimeout(()=>{
      setNotification(null)
    }, notificationProps.duration);
  }, []
)
  const NotifictionComponent = notification ? (
    
    <div>
      <Notification {...notification }/>
    </div>
    
  ): null

  return{ NotifictionComponent, triggerNotification}
}

export default useNotification;