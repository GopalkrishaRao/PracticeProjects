import React, { useState } from "react"

import { CustomForm } from "./components/CustomForm";
import { TaskList } from "./components/TaskList";
import Editform from "./components/Editform";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {

  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [previousFoucs, setPreviousFocus] = useState(false)


  const addTask = (task) =>{
    setTasks(prevState=>[...prevState, task])
  }

  const deleteTask = (id)=>{
    setTasks(prevState=>prevState.filter(t=>t.id!==id))
  }

  const toggleTask = (id)=>{
    setTasks(prevState => prevState.map(t=>(
      t.id===id 
        ? {...t, checked: !t.checked}
        : t
      )))
  }
  
  const updateTask = (task)=>{
    setTasks(prevState => prevState.map(t=>(
      t.id===task.id 
      ? {...t, name: task.name}
        : t
  )))
   closeEditMode()
  }

  const closeEditMode=()=> {
    setIsEditing(false);
    previousFoucs.focus()

  }

  const enterEditMode = (task) =>{
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocus(document.activeElement)
  }

  return (
    <>
    <div className="container">
      <header>
        <h1>To Do List</h1>
      </header>
      { isEditing && (<Editform
                      editedTask={editedTask}
                      updateTask={updateTask}
                      closeEditMode={closeEditMode}

                      />) 

      }
      <CustomForm addTask = {addTask}/>
      {tasks && (
        <TaskList
           tasks = {tasks} 
           deleteTask={deleteTask}
           toggleTask = {toggleTask}
           enterEditMode={enterEditMode}
           />
        )}
    </div>
    
    </>
  )
}

export default App
