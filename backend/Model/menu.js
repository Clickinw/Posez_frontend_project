const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema(
  {
    tableid: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Array, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('menu', menuSchema);
