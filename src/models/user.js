const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;