import { useState } from "react";
/**
 * Permite el manejo del estado de todos
 * @param {Object} initialState
 * @returns Array
 */
const useTodo = (initialState = []) => {
  const [todoValues, setTodoValues] = useState(initialState);
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
  const handleAddTodo = ( newObject ) => {
    setTodoValues((state) => [
      ...state,
      newObject,
    ]);
    console.log(todoValues)
  };

  const handleDeleteTodo = ( e, key ) => {
    console.log(e)
    setTodoValues((state) => state.filter((value,) => value.key !== key));
  };

  return [ todoValues, handleAddTodo, handleDeleteTodo ];
};

export default useTodo;
