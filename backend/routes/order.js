const express = require('express');

const router = express.Router();
const Order = require('../model/order');

//create router to post menu to order list
router.post('/', async (req, res) => {
  try {
    const { name, price, size, quantity, tableid } = req.body;
    const menu = await Order.create({
      tableid,
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

//create router to get order list

router.get('/', async (req, res) => {
  const result = await Order.find({});
  res.send(result);
});

router.get('/:id', async (req, res) => {
  const table_id = Number.parseInt(req.params.id);
  const result = await Order.find({});
  const table = result.filter((item) => item.tableid == table_id);
  res.send(table);
});

module.exports = router;
