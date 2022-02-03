import React, { createContext, useReducer } from 'react';
import axios from 'axios'

import AppReducer from './AppReducer';

const initialState = {
  todos: [],
  error: null,
  loading: true
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  async function getTransactions() {
    try {
      const res = await axios.get('/')

      dispatch({
        type: 'GET_TODO',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'TODO_ERROR',
        payload: err.response.data.error
      })
    }
  }

  function addTodo(note) {
    dispatch({
      type: 'ADD_TODO',
      payload: note
    })
  }
  function deleteTodo(id) {
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    })
  }
  function clearList() {
    dispatch({
      type: 'CLEAR_LIST',
      payload: null
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        clearList
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};
