const express = require('express');
const server = express();

const carRouter = require('./cars/carRouter');
const saleRouter = require('./sales/saleRouter');

server.use(express.json());
server.use('/api/cars', carRouter);
server.use('/api/sales', saleRouter);

module.exports = server;