const express = require('express');

const router = express.Router();
const Menu = require('../model/menu');

router.post('/', async (req, res) => {
  try {
    const { name, price, size, image } = req.body;
    const menu = await Menu.create({
      name,
      price,
      image,
      tableid,
    });
    res.status(201).json(menu);
  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).json(menu);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
