import React, { useState } from 'react';
import './gridlightt.css';

function Cell ({filled, onClick, isDisabled}){
    return (
    <>
    <button
        type='button'
        disabled={isDisabled}
        onClick={onClick}
        className={filled? 'cell cell-activated':'cell'}>

    </button>
    </>
    )
}
 const GridLight = () => {
    const [order, setOreder]= useState([]);

    const [isDeactivating, setisDeactivating]=useState(false);
    const config= [
        [1,1,1],
        [1,0,1],
        [1,1,1],
    ];

    function decativateCells(){
        setisDeactivating(true);
        const timer = setInterval(()=>{
            setOreder((origOrder)=>{
                const newOrder =origOrder.slice();
                newOrder.pop();
                if(newOrder.length===0){
                    clearInterval(timer);
                    setisDeactivating(false)
                }
                return newOrder
            })
        },300)
    }
    function activateCells(index){
        const newOrder=[...order, index]
        setOreder(newOrder);

        if(newOrder.length===config.flat(1).filter(Boolean).length){
            decativateCells()
        }
    }
    return(
    <>
    <div className='wrapper'>
        <div className='grid' style={{gridTemplateColumns:`repeat(${config[0].length}, 1fr)`}}>
            {config.flat(1).map((value, index)=>{
            return value ? (
            <Cell 
                key={index}
                filled={order.includes(index)}
                onClick={()=>activateCells(index)}
                isDisabled={order.includes(index) ||isDeactivating}
            />) : <span key={index}/>
            
            })}

        </div>
    </div>
    </>
    )
 }
    
export default GridLight;