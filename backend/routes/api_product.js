const express = require('express');

const router = express.Router();
const Menu = require('../model/menu');

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Menu.findByIdAndDelete(id);
    res.status(201).json(menu);
  } catch (err) {
    console.log(err);
  }
});

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

router.get('/', async (req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).json(menu);
  } catch (err) {
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const menu = await Menu.findByIdAndUpdate(id, {
      name,
      price,
    });
    res.status(201).json(menu);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
