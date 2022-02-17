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
      const res = await axios.get('/todos')
      dispatch({
        type: 'GET_TODOS',
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: 'TODO_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function addTodo(note) {
      dispatch({
        type: 'ADD_TODO',
        payload: note
      })
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`/todos/${id}`)
      dispatch({
        type: 'DELETE_TODO',
        payload: id
      })
    } catch (err) {
      dispatch({
        type: 'TODO_ERROR',
        payload: err.response.data.error
      })
    }

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
        getTransactions,
        error: state.error,
        loading: state.loading,
        addTodo,
        deleteTodo,
        clearList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};
