import { useContext, useState } from "react";

import { PlusIcon } from '@heroicons/react/24/solid';
import { todoContext } from "../context/context";

export const CustomForm = () => {
  const [task, setTask] = useState("");
  const {addTask} = useContext(todoContext)

  // get date in dd mm yyyy format

    
  const getToday= ()=>{
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    let date = dd + '-' + mm + '-' + yyyy;

    // time
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    let time = hr + ":" + min + ":" + sec;
    
    // return (<div style={{color:"red"}}>
    //     <div>{date}</div>
    //     <div>{time}</div>
    //   </div>)
    return Date.now()
  }

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        addTask({
          name: task,
          checked: false,
          id: Date.now(),
          timeStamp: getToday()
        })
        setTask(" ")
    };

  return (
  <>
    <form 
    className="todo"
    onSubmit={handleFormSubmit}
    >
        <div className="wrapper">
            <input 
              type="text"
              required
              id="task"
              className="input"
              value={task.trim()}
              onInput={(e)=>setTask(e.target.value)}
              placeholder="Add task"
              maxLength={60}
              autoFocus
              />
              <label htmlFor="task" className="label">Add task</label>
        </div>
        <button 
          className="btn"
          aria-label="Add tasks"
          type="submit"
        >
          <PlusIcon/>
        </button>
    </form>
</>
  );
};