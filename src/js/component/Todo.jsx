import React, { memo } from 'react'

const Todo = ({value, handleDeleteTodo, index}) => {
  return (
    <li>
      <span onClick={(e) => handleDeleteTodo(e, index)}><i className="fa fa-trash"></i></span> {value}
    </li>
  )
}

export default memo(Todo)