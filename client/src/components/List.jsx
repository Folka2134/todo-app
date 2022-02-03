import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { ListItem } from './ListItem';


export const List = () => {
  const { todos, clearList, getTransactions } = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <>
      <button onClick={clearList} className='text-white p-3'>Clear List</button>
      <ul>
        {todos.map((todo) => <ListItem key={todo.id} todo={todo} />)}
      </ul>
    </>
  )
};
