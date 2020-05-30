const mongoose = require('../../database');

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
    ref: 'User',
    required: true
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;