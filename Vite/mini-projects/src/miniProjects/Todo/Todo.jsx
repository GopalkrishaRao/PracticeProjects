import'./todo.css';
import { Provider, useDispatch, useSelector } from "react-redux";
import  store  from "./store/store"
import { useState } from 'react';
import { AddTodoAction, RemoveTodoAction } from './actions/todoActions';


export default function Todo() {
    const dispatch=useDispatch();
    const Todo = useSelector((state)=>state.Todo)
    const {todos}= Todo
    const [todo, setTodo]=useState()
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(AddTodoAction(todo))
    }

    const removeHanbler = (t)=>{
        dispatch(RemoveTodoAction(t))
    }
  return (
    <>  
    <Provider store={store}>
    <div className='Todo'>
    <div className='Todo-header'>
        <h2>Todo List App in Redux</h2>
        <form onSubmit={handleSubmit}>
            <input placeholder='Enter a todo'
            onChange={e=>setTodo(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
        <ul className='allTodos'>
            {
                todos && todos.map(t=>(
                    <li key={t.id}className='singleTodo'>
                    <span className='todoText'> 
                    {t.todo}
                    </span>
                    <button className='delete' onClick={()=>removeHanbler(t.id)}>Delete </button>
                </li>
                ))
            }
           
        </ul>
    </div>
    </div>
    </Provider>
    </>
  )
}
