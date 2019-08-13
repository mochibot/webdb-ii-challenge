const express = require('express');
const server = express();

const carRouter = require('./cars/carRouter');

server.use(express.json());
server.use('/api/cars', carRouter);

module.exports = server;