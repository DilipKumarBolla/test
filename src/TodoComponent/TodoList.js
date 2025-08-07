import React from 'react'
import TodoItem from './TodoItem'

function TodoList({task, toggleComplete, deleteTask }) {


  return (
    <ul>
        {task.map((task, index)=>(
            <TodoItem
            key={index}
            task = {task}
            toggleComplete ={toggleComplete}
            deleteTask = {deleteTask}
            />
            
        ))}
    </ul>
  );
};

export default TodoList