import React, { useEffect, useState } from 'react';
import useTodo from '../hooks/useForms.js';
import Todo from './Todo.jsx';

const Todolist = () => {
  const [input, setInput] = useState('');
  const [todoValues, handleAddTodo, handleDeleteTodo, setTodoValues] = useTodo([]);

  const isRepeat = (string) => {
    return todoValues.some(({ value }) => value === string);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion
    if (isRepeat(input) || !input.trim()) return setInput('');

    const newTodo = { key: crypto.randomUUID(), label: input, deleted: false, done: false };
    handleAddTodo(newTodo);
    setInput('');
  };
  // Traer todos
  useEffect(() => {
    fetch('http://assets.breatheco.de/apis/fake/todos/user/crgarcia')
      .then((res) => res.json())
      .then((data) => setTodoValues((state) => [...state, ...data]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='mt-5'>
      <div id='container'>
        <form
          name='form'
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h1 className='todo-header'>Todo List</h1>
          <input
            id='addToDo'
            type='text'
            value={input}
            placeholder='Add to do here'
            autoFocus
            onChange={({ target }) => setInput(target.value)}
          />
          <ul>
            {todoValues?.length > 0 &&
              todoValues.map((item) => {
                return (
                  <Todo
                    value={item.label}
                    deleted={item.deleted}
                    handleDeleteTodo={handleDeleteTodo}
                    key={item.key}
                    index={item.key}
                  />
                );
              })}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Todolist;
