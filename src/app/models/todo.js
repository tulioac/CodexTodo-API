const mongoose = require('../../database');

const User = require('./user');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true,
    default: "Baixa"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    require: true
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;