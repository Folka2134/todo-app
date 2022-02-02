import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Input = () => {
  const [text, setText] = useState('')
  const { addTodo } = useContext(GlobalContext)

  const submit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      todo: text
    }

    addTodo(newTodo)
  }

  return (
    <form onSubmit={submit} className='flex'>
      <input onChange={(e) => setText(e.currentTarget.value)} type="text" placeholder='new todo' />
      <button className='bg-pink-200 p-3'>+</button>
    </form>
  )
};
