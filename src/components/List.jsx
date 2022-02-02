import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { ListItem } from './ListItem';


export const List = () => {
  const { todos } = useContext(GlobalContext)

  return (
    <>
      <button className='text-white'>Clear List</button>
      <ul>
        {todos.map((todo) => <ListItem key={todo.id} todo={todo} />)}
      </ul>
    </>
  )
};
