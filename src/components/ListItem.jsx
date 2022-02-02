import React from 'react';

export const ListItem = ({ todo }) => {
  return (
    <li><span className='text-white'>{todo.todo}</span><button className='text-red-600 p-1 ml-3'>x</button></li>
  )
};
