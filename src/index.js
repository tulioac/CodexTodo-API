const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tutex1500:togekiss1@cluster0-wulxk.gcp.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Connected!'); });

let todoSchema = new mongoose.Schema({
  title: String
});

let Todo = mongoose.model('Todo', todoSchema);

let cafe = new Todo({ title: 'Cafe' });
let almoco = new Todo({ title: 'Almoco' });

console.log(cafe.title);

cafe.save((err, cafe) => {
  if (err)
    return console.error(err);
  console.log('Deu bom');
});


Todo.find((err, todos) => {
  if (err)
    return console.error(err);
  console.log(todos);
});

Todo.find({ title: /^Cafe/ }, () => {
  console.log('Achou');
});
