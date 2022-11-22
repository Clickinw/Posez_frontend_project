const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Array, required: true },
  size: { type: Array, required: true },
}
, { timestamps: true }
);



module.exports = mongoose.model('menu', menuSchema);
