import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { ListItem } from './ListItem';


export const List = () => {
  const { todos, clearList } = useContext(GlobalContext)

  return (
    <>
      <button onClick={clearList} className='text-white'>Clear List</button>
      <ul>
        {todos.map((todo) => <ListItem key={todo.id} todo={todo} />)}
      </ul>
    </>
  )
};
