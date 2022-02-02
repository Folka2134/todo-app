import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ListItem = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext)

  return (
    <li><span className='text-white'>{todo.todo}</span><button onClick={() => deleteTodo(todo.id)} className='text-red-600 p-1 ml-3'>x</button></li>
  )
};
