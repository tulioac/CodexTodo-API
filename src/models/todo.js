const mongoose = require('../database');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;