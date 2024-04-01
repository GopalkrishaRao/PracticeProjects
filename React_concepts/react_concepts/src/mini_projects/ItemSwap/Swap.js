import React, {  useState } from 'react'

export default function Swap() {
    let list1=["item1", "item2", "item3"];
    let list2=["item A", "item B", "item C"];

   
         let list1Obj=list1.map((item, i)=>{
        return ({
            id:i,
            name:item,
            checked:false
        }
        )
    });

    let list2Obj=list2.map((item, i)=>{
        return ({
            id:i,
            name:item,
        }
        )
    })

   
    const [renderList1, setRenderList1]=useState(list1Obj);
    const [renderList2, setRenderList2]=useState(list2Obj);


    const handleSwap=()=>{
        const updatedList1=[...renderList1];
        const updatedList2=[...renderList2]; 
        updatedList1.forEach((item, id)=>{
            if(item.checked){
                const temp=updatedList1[id].name;
                updatedList1[id].name=updatedList2[id].name;
                updatedList2[id].name=temp;
            }
            updatedList1[id].checked=false;
        })
      setRenderList1(updatedList1)
      setRenderList2(updatedList2)
    };

    const handleCheckboxChange=(e)=>{
        const updatedList1=[...renderList1];
        updatedList1[e].checked=!updatedList1[e].checked
        setRenderList1(updatedList1);
    };


   

  return (
    <>
    <h2>Swap Items</h2>

    <h2>List 1</h2>
    {
        renderList1.map((item)=>{
            return(
                <li key={item.id}>
                    <input
                        type='checkbox'
                        // value={item.name}
                        checked={item.checked}
                        onChange={()=>handleCheckboxChange(item.id)}
                    />
                    <label>{item.name}</label>
                </li>
            )
        })
        
    }
        <h2>List 2</h2>
    {
        renderList2.map((item)=>{
            return(
                <li key={item.id}>
                    <span>{item.name}</span>
                </li>
            )
        })
    
    }
    <br/>
    <button onClick={handleSwap}>Swap items</button>
    </>
  )
}
