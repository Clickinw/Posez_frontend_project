const express = require('express');

const router = express.Router();
const Menu = require('../model/menu');

router.post('/', async (req, res) => {
  try {
    const { name, price } = req.body;
    const menu = await Menu.create({
      name,
      price,
    });
    res.status(201).json(menu);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
