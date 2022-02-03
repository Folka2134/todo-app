const express = require('express')
const router = express.Router()

const { getTodos, addTodo, deleteTodo } = require('../controllers/todoController')

router.route('/todos')
  .get(getTodos)
  .post(addTodo)

router.route('todos/:id')
  .delete(deleteTodo)

module.exports = router