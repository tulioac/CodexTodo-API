const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controller/authController')(app);
require('./app/controller/todoController')(app);

app.get('/', (req, res) => {
  res.send({ msg: "Ok" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor ligado...');
})