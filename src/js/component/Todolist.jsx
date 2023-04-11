import React, { useEffect, useState } from 'react'
import Todo from './Todo.jsx'
import useTodo from '../hooks/useForms.js';

let number = 0;

const Todolist = () => {
  const [input, setInput] = useState("");
  const [todoValues, handleAddTodo, handleDeleteTodo] = useTodo([]);
  
  const handleSubmit = (e, value) => {
    // validacion
    if (e === null || typeof value !== "string") return;
    e.preventDefault();
    const newTodo = {key: number++, value, deleted: false};
    handleAddTodo(newTodo);
    setInput("");
  };
  
  return (
    <div className="mt-5">
      <div id="container">
        <form name="form" onSubmit={(e) => {handleSubmit(e, input)}}> 
          <h1 className="todo-header">Todo List</h1>
          <input id="addToDo" type="text" value={input} placeholder="Add to do here" onChange={({target}) => setInput(target.value)}/>
          <ul>
            { number > 0 && todoValues.map((item) => {
              console.log('again');
              return (<Todo
                value={item.value}
                deleted={item.deleted}
                handleDeleteTodo={handleDeleteTodo}
                key={item.key}
                index={item.key}
              />)
            })}
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Todolist