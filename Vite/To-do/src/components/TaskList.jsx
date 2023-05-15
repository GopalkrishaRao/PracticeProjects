import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';
import { todoContext } from '../context/context';

export const TaskList = () => {
  const {tasks} = useContext(todoContext)
  return (
    <ul className={styles.tasks}>
    {tasks.sort((a, b) => b.id - a.id).map(task => (
      <TaskItem
        key={task.id}
        task={task}
      />
    ))
    }
  </ul>
  )
};