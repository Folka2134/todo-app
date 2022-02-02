import React from 'react';

export const Input = () => {
  return (
    <div className='flex'>
      <input type="text" placeholder='new todo' />
      <button className='bg-pink-200 p-3'>+</button>
    </div>
  )
};
