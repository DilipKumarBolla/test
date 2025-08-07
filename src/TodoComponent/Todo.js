import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Todo() {

    const [task, setTask] = useState([]);
    const [input, setInput] = useState('');

    const addTask = ()=>{
        if(input){
            setTask([...task, {text:input, completed: false}]);
            setInput('');

        }

    };
    const toggleComplete = (index)=>{
        const updatedTask = task.map((task, i)=>
        i === index ? {...task, completed: !task.completed }: task
        );
        setTask(updatedTask);
    };

    // const deleteTask = (index)=>{
    //     const filterdTask = task.filter((_, i)=> i==index);
    //     setTask(filterdTask);
    // }
    const deleteTask = (index) => {
    const filteredTask = task.filter((_, i) => i !== index);
    setTask(filteredTask);
};

  return (
    // <div>
        
    //     <TodoInput input = {input} setInput = {setInput} addTask = {addTask} />
    //     <TodoList 
    //     task = {task}
    //     toggleComplete={toggleComplete}
    //     deleteTask = {deleteTask}
    //     />
    // </div>
    <div>
      <TodoInput input={input} setInput={setInput} addTask={addTask} />
      <TodoList task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  )
}

export default Todo