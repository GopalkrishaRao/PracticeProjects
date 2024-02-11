import React, {useState} from 'react'

export default function Todo() {
    const [todoList, setTodoList]=useState([]);
    const [todo, setTodo]= useState('');
    

    const handleChange=(e)=>{
        setTodo(e.target.value)
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
       setTodoList([{ id: Date.now(), text: todo }, ...todoList]);
        setTodo('')
    }

    const handleDelete = (id)=>{
       setTodoList(todoList.filter(item=>item.id!==id))
    };

    // const handleEdit=(id)=>{

    // }
  return (
    <>
        <form onSubmit={handleSubmit}>
        <input 
            placeholder='Add Todo'
            required
            minLength={2}
            maxLength={40}
            type='text'
            onChange={handleChange}
            value={todo}
            />
        <button type='submit'>Add Todo</button>
        </form>
            {todoList.map((t)=>{
                return (
                    <ul key={t.id} >
                        <li>{t.text}</li>
                        {/* <button onClick={()=>handleEdit(t.id)}>Edit</button> */}
                        <button onClick={()=>handleDelete(t.id)}>Delete</button>
                        
                    </ul>
                )
            })}
    </>
  )
}
