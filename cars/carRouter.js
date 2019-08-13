const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
const { checkCarInput } = require('../middlewares/middlewares');

const router = express.Router();

//get all cars 
router.get('/', async (req, res) => {
  try {
    const cars = await db('cars');
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: 'error retrieving cars info from db' })
  }
})

//get specific car 
router.get('/:id', async (req, res) => {
  try {
    const car = await db('cars').where({ id: req.params.id })
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: 'error retrieving car info from db' })
  }
})

//add a new car
router.post('/', checkCarInput, (req, res) => {
  let car = req.body;
  db('cars')
    .insert(car)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ message: 'error adding car to db'})
    })
})

//delete a car
router.delete('/:id', (req, res) => {
  db('cars')
    .where({ id: req.params.id})
    .del()
    .then(response => {
      if (response > 0) {
        res.status(200).json({ message: 'car has been deleted'});
      } else {
        res.status(404).json({ message: 'no car with this id exists' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'error deleting car from db'})
    })
})

//edit a car
router.put('/:id', checkCarInput, (req, res) => {
  let car = req.body;
  db('cars')
    .where({ id: req.params.id})
    .update(car)
    .then(response => {
      if (response > 0) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ message: 'no car with this id exists' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'error updating car in db' })
    })
})


module.exports = router;