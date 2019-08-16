const express = require('express');
const server = express();

const carRouter = require('./cars/carRouter');
const saleRouter = require('./sales/saleRouter');

server.use(express.json());

server.use('/api/cars', carRouter);
server.use('/api/sales', saleRouter);
server.use(catchError);

function catchError (error, req, res, next) {
  res.status(error.status || 500).json({ message: error.message || 'internal server error'});
}

module.exports = server;