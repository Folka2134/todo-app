const TodosModel = require('../models/TodosModel')

//@desc GET Get all Todos
//@route GET /
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await TodosModel.find()
    return res.status(200).json({
      success: true,
      data: todos
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server error'
    })
  }
}
//@desc POST Add new Todo
//@route POST /
exports.addTodo = async (req, res, next) => {
  try {
    const { todo } = req.body
    const newTodo = await TodosModel.create(req.body)

    return res.status(201).json({
      success: true,
      data: newTodo
    })
  } catch (err) {
    // if (err.name === 'ValidateionError') {
    //   const messages = Object.values(err.errors.map((val) => val.message))
    //   return res.status(400).json({
    //     success: false,
    //     error: messages
    //   })
    // } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      })
    
  }
}
//@desc DELETE Delete Todo
//@route DELETE /:id
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await TodosModel.findById(req.params.id)

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: 'No todo found'
      })
    }

    await todo.remove()
    return res.status(200).json({
      success: true,
      data: {}
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error'
    })
  }
}