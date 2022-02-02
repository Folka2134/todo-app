import React, { createContext, useReducer } from 'react';

const initialState = {
  todos: [
    {id: 1, todo: 'First'},
    {id: 2, todo: 'Second'},
    {id: 3, todo: 'Third'},
  ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GlobalContext>
      {children}
    </GlobalContext>
  )
};
