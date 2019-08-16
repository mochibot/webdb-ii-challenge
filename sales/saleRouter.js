const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
const { checkSalesInput } = require('../middlewares/middlewares');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let sales = await db('sales');
    res.status(200).json(sales);
  } catch (error) {
    next(error)
  }
})


router.get('/:id', async (req, res, next) => {
  try {
    const car = await db('sales').where({ id: req.params.id })
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
})

router.post('/', checkSalesInput, (req, res, next) => {
  let record = req.body;
  db('sales')
    .insert(record)
    .then(response => {
      res.status(201).json(response)
    })
    .catch(error => {
      next(error);
    })
})


module.exports = router;