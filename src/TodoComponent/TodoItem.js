import React from 'react'

function TodoItem({task, index, toggleComplete, deleteTask}) {
  return (
    <li style={{textDecorationLine: task.Completed ? 'line-through': 'none'}}>
    {task.text} 
    <button onClick={()=> toggleComplete(index)}>toggleComplete</button>
    <button onClick={()=> deleteTask(index)}>deleteTask</button>
    </li>
  )
}

export default TodoItem