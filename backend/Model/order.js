//create order schema

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  tableid: { type: Number, required: true },
  name: { type: String, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('order', orderSchema);
