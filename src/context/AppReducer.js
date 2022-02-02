// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }
    default:
      return state
  }
}