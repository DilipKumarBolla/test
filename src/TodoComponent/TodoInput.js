import React from 'react'


function TodoInput({input, setInput, addTask}) {


  return (
    <div>
        <input 
        type ="text"
        placeholder="Add a task"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
    </div>
  )
}

export default TodoInput