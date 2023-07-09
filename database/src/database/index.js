const mongoose = require('mongoose');
//const { MongoClient } = require('mongodb');
const { MONGO_URI } = require('../config/envs');
const schemaCharacters = require('./schemas/schemaCharacters');
const schemaFilms = require('./schemas/schemaFilms');
const schemaPlanets = require('./schemas/schemaPlanets');

const conn = mongoose.createConnection(MONGO_URI);

//const Character = conn.model('Character', schemaCharacters);
//const Film = conn.model('Film', schemaFilms);
//const Planet = conn.model('Planet', schemaPlanets);

module.exports = {
    Character: conn.model('Character', schemaCharacters),
    Film: conn.model('Film', schemaFilms),
    Planet: conn.model('Planet', schemaPlanets)
}




