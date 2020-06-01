const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deploy:uploaddeploy@cluster0-wulxk.gcp.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Connected!'); });

mongoose.Promise = global.Promise;

module.exports = mongoose;