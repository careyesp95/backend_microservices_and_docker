const mongoose = require('mongoose');

const schemaPlanets = new mongoose.Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    rotation_period: {type: String, required: true},
    orbital_period: {type: String, required: true},
    diameter: {type: String, required: true},
    climate: {type: String, required: true},
    gravity: {type: String, required: true},
    terrain: {type: String, required: true},
    surface_water: {type: String, required: true},
    population: {type: String, required: true},
    residents: [{type: String , ref: "Character"}],
    films: [{type: String , ref: "Film"}],
});

schemaPlanets.statics.list = async function() {
    const query = await this.find()
    .populate('residents',['_id','name'])
    .populate('films',['_id','title'])
    return query;
}

schemaPlanets.statics.getById = async function(_id) {
    const query = await this.findById(_id)
    .populate('residents',['_id','name'])
    .populate('films',['_id','title'])
    return query;
}

schemaPlanets.statics.createPlanet = async function(planet) {
    const query = await this.create(planet);
    return query;
}
module.exports = schemaPlanets;