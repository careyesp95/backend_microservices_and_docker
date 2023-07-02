const express = require('express');
const morgan = require('morgan');
const routerPlanets = require('./routes');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use('/planets', routerPlanets);

server.use((err, req,res,next) => {
    res.status(err.statusCode).send({
        error: true,
        message: err.message,
    })
})

module.exports = server;