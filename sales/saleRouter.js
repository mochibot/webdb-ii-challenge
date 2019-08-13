const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let sales = await db('sales');
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: 'error retrieving sales info from db' })
  }
})

module.exports = router;