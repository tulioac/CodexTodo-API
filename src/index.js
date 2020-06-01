const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controller/authController')(app);
require('./app/controller/todoController')(app);

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor ligado...');
})