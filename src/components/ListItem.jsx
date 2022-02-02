import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ListItem = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext)

  return (
    <li className='flex justify-between w-72'><span className='text-white whitespace-pre-wrap'>{todo.todo}</span><button onClick={() => deleteTodo(todo.id)} className='text-red-600 p-1 flex items-start'>x</button></li>
  )
};
