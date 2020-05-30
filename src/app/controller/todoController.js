const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Todo = require('../models/todo');

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
  res.send({ user: req.userId });
});

router.get('/:todoId', async (req, res) => {
  res.send({ user: req.userId });
});

router.post('/', async (req, res) => {
  res.send({ user: req.userId });
});

router.put('/:todoId', async (req, res) => {
  res.send({ user: req.userId });
});

router.delete('/:todoId', async (req, res) => {
  res.send({ user: req.userId });
});

module.exports = app => app.use('/todo', router);