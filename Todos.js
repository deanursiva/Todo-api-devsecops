const express = require('express');
const router = express.Router();

let todos = [
  { id: 1, task: 'Belajar DevSecOps', done: false },
  { id: 2, task: 'Push project ke GitHub', done: true }
];

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    done: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

module.exports = router;
