const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authConfig = require('../../config/auth');
const authMiddlware = require('../middlewares/auth');
const User = require('../models/User');

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, { expiresIn: 86400 });
}

router.post('/register', async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: "User already exists" });
    }

    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({
      user,
      token: generateToken({ id: user.id })
    });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

// TODO: Verificar se o token passado já está na lista de tokens!

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(400).send({ error: "User not found" });
  }

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: "Invalid password" })
  }

  user.password = undefined;

  return res.send({
    user,
    token: generateToken({ id: user.id })
  });
});

router.use(authMiddlware);

router.post('/logout', async (req, res) => {
  try {
    const { token, userId } = req;

    const user = await User.findByIdAndUpdate(userId, { $push: { usedTokens: token } }, { useFindAndModify: true });

    res.send({ user });
  }
  catch (err) {
    res.status(400).send({ error: "Cant logout" })
  }
})

module.exports = app => app.use('/auth', router);

