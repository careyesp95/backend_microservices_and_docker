const express = require('express');
const server = require('../src/server.js');
//const {Character, Film, Planet} = require('./src/database/index.js');


const PORT_DB = 8004;

//Character.find()
//.populate('homeworld',['_id','name'])
//.populate('films',['_id','title'])
//.then((characters) => console.log(characters));

server.listen(PORT_DB, () => 
console.log(`Server is running on port ${PORT_DB}`)
);
