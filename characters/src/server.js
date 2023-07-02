const express = require('express');
const morgan = require('morgan');
const routerCharacters = require('./routes');


const server = express();

server.use(express.json());
server.use(morgan('dev'));


server.use('/characters', routerCharacters);

server.use((err,req,res,next) =>{
    res.status(err.status || 500 ).send({
        error:true,
        message:err.message
    })
})


module.exports = server;

