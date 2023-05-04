import React from 'react';
import { todoContext } from '../context/context';
import { useContext } from 'react';

export default function FilteredValue() {
    const {tasks, searchVal} = useContext(todoContext)
    
    const filteredTasks = tasks.filter(task =>
      task.toLowerCase().includes(searchVal)
    );
  

  return (
    <>
    <div>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div key={task}>{task}</div>
          ))
        ) : (
          <h1>No result found!...</h1>
        )}
      </div>
    </>
  )
}
