import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { ListItem } from './ListItem';


export const List = () => {
  const { todos } = useContext(GlobalContext)

  return (
    <>
      <ul className='w-full'>
        {todos.map((todo) => <ListItem key={todo.id} todo={todo} />)}
      </ul>
    </>
  )
};
