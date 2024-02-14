import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, deleteTodo} from './Action/action';


export default function Todo() {
    const dispatch = useDispatch();
    const myState= useSelector((state)=>state.todoActions);
    const [inputChange, setInputChange]=useState('')

    const handleChange=(e)=>{
        const updatedValue=e.target.value
        setInputChange(updatedValue);
        console.log(updatedValue);
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addTodo(inputChange))
        setInputChange('');
    };

    

  return (
    <>
    <div>Todo</div>
    <form onSubmit={handleSubmit} >
        <input 
            type='text'
            placeholder='Add todo'
            value={inputChange}
            onChange={handleChange}/>
        <button type='submit'>Add</button>
    </form>
    <div>
        {
            myState.map((item)=>{
                return(
                <ul key={item.id}>
                    <li>{item.text}</li>
                    <button onClick={()=>dispatch(deleteTodo(item.id))}>Delete</button>
                </ul>
                )
            })
        }
    </div>
    </>
  )
}
