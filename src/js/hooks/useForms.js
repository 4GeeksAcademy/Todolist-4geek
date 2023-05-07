import { useState } from 'react';
/**
 * Permite el manejo del estado de todos
 * @param {Object} initialState
 * @returns Array
 */
const useTodo = (initialState) => {
  const [todoValues, setTodoValues] = useState(initialState ?? []);
  //   Formato del useState
  /* [
    {
        key: 0,
        value: '',
        deleted: false,
    },
    {
        key: 0,
        value: '',
        deleted: false,
    },
] */
  const handleAddTodo = (newObject) => {
    setTodoValues((state) => [...state, { ...newObject }]);
    // Save todo
    fetch('http://assets.breatheco.de/apis/fake/todos/user/crgarcia', {
      method: 'PUT',
      body: JSON.stringify(todoValues),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log('msg: ', data.result))
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (key) => {
    setTodoValues((state) => [...state.filter((value) => value.key !== key)]);
    console.log(todoValues);
    // Save todo
    fetch('http://assets.breatheco.de/apis/fake/todos/user/crgarcia', {
      method: 'PUT',
      body: JSON.stringify(todoValues),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log('msg: ', data.result))
      .catch((err) => console.log(err));
  };

  return [todoValues, handleAddTodo, handleDeleteTodo, setTodoValues];
};

export default useTodo;
