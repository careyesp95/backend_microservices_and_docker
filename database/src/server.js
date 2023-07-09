const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const validateModel = require('./middleware/validateModel.js');


const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use('/',validateModel, routes);

module.exports = server;