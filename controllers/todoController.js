//@desc GET Get all Todos
//@route GET /
exports.getTodos = (req, res, next) => {
  res.send('GET Todos')
}
//@desc POST Add new Todo
//@route POST /
exports.addTodo = (req, res, next) => {
  res.send('POST Todos')
}
//@desc DELETE Delete Todo
//@route DELETE /:id
exports.deleteTodo = (req, res, next) => {
  res.send('DELETE Todos')
}