const express = require('express');

const router = express.Router();
const Order = require('../model/order');

//create router to post menu to order list
router.post('/', async (req, res) => {
  try {
    const { name, price, size, quantity } = req.body;
    const menu = await Order.create({
      name,
      price,
      size,
      quantity,
      tableid,
    });
    res.status(201).json(menu);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
