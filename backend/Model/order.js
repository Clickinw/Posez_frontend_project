//create order schema

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  menu: { type: Array, required: true },
  price: { type: Array, required: true },
});

module.exports = mongoose.model('order', orderSchema);
