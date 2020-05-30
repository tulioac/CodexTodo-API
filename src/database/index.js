const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo', { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Connected!'); });

mongoose.Promise = global.Promise;

module.exports = mongoose;