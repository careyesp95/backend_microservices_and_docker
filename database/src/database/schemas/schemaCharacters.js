const {Schema} = require('mongoose');

const schemaCharacters = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    height: {type: String, required: true},
    mass: {type: String, required: true},
    hair_color: {type: String, required: true},
    skin_color: {type: String, required: true},
    eye_color: {type: String, required: true},
    birth_year: {type: String, required: true},
    gender: {type: String, required: true},
    homeworld: {type: String, ref: "Planet"},
    films: [{type: String , ref: "Film"}],
});

schemaCharacters.statics.list = async function() {
    const query = await this.find()
    .populate('homeworld',['_id','name'])
    .populate('films',['_id','title'])
    return query;
}

schemaCharacters.statics.getById = async function(id) {
    const query = await this.findOne({_id: id})
    .populate('homeworld',['_id','name'])
    .populate('films',['_id','title'])
    return query;
}

schemaCharacters.statics.createCharacter = async function(character) {
    const query = await this.create(character);
    return query;
}

module.exports = schemaCharacters;
