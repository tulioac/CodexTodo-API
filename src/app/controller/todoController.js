const express = require('express');

const authMiddleware = require('../middlewares/auth');

const Todo = require('../models/todo');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.userId });

    res.send({ todos });
  } catch (err) {
    res.status(400).send({ error: "Error loading todos" });
  }
});

router.get('/high', async (req, res) => {
  try {
    await Todo.find().sort({ priority: "ascending" }).exec((err, todos) => {
      res.send(todos);
    });
  } catch (err) {
    res.status(400).send({ error: "Error loading sorted todos" });
  }
});

router.get('/:todoId', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.todoId);

    res.send({ todo });
  } catch (err) {
    res.status(400).send({ error: "Error loading todo" });
  }
});

router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({ ...req.body, user: req.userId });

    return res.send(todo);
  } catch (err) {
    res.status(400).send({ error: "Error creating new todo" });
  }
});

router.put('/:todoId', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.todoId, {
      ...req.body,
      user: req.userId
    }, { new: true });

    return res.send(todo);
  } catch (err) {
    res.status(400).send({ error: "Error updating todo" });
  }
});

router.delete('/:todoId', async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.todoId);

    res.send();
  } catch (err) {
    res.status(400).send({ error: "Error deleting todo" });
  }
});

module.exports = app => app.use('/todo', router);