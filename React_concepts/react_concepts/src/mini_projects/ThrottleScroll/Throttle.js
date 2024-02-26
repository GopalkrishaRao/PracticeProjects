import {useEffect, useState} from 'react';
import useThrottleHook from './component/useThrottleHook';

export default function Throttle() {
    const [windowSize, setWindowSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    });

    const handleResize=()=>{
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        });
    };

    const throttleHandleResize = useThrottleHook(handleResize, 500);

    useEffect(()=>{
        window.addEventListener("resize", throttleHandleResize);

        return ()=>{
            window.removeEventListener("resize", throttleHandleResize);
        }
    },[]);

  return (
    <>
    <p>
        Windows Size: {windowSize.width} * {windowSize.height}
    </p>
    </>
  )
};
