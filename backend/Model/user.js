const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: { type: Number, require: [true, 'A user must id'] },
  first_name: { type: String, require: [true, 'A user must first_name'] },
  last_name: { type: String, require: [true, 'A user must last_name'] },
  email: { type: String, require: [true, 'A user must email'] },
  password: { type: String, require: [true, 'A user must password'] },
  token: { type: String },
});

module.exports = mongoose.model('user', userSchema);
