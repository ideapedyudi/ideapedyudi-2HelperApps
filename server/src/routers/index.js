const express = require('express')

const router = express.Router()

// Controllers

const { todos, todo, addTodo, updateTodo, deleteTodo } = require('../controllers/todo')

// Todo
router.get('/todos', todos)
router.get('/todos/:id', todo)
router.post('/todos', addTodo)
router.patch('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)


module.exports = router