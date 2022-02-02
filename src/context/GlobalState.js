import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

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

  function deleteTodo(id) {
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        deleteTodo
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};
