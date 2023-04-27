import { useState } from "react";

import { PlusIcon } from '@heroicons/react/24/solid'

export const CustomForm = ({addTask}) => {
  const [task, setTask] = useState("");

  // get date in dd mm yyyy format
  const getToday= ()=>{
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (   dd + '-' + mm + '-' + yyyy)
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
              id="task"
              className="input"
              value={task}
              onInput={(e)=>setTask(e.target.value)}
              placeholder="Add task"
              required
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
}
