import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ListItem = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext)

  return (
    <li className='grid grid-cols-2'><span className='text-white'>{todo.todo}</span><button onClick={() => deleteTodo(todo.id)} className='text-red-600 p-1'>x</button></li>
  )
};
