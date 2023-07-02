const express = require('express');
const morgan = require('morgan');
const routerFilms = require('./routes');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use('/films', routerFilms);


server.use((err, req, res, next)=>{
    res.status(err.statusCode || 500).send({
        error: err.message,
        message: err.message,

    })
})

module.exports = server;