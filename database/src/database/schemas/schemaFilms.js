const {Schema} = require('mongoose');

const schemaFilms = new Schema({
    _id: {type: String, required: true},
    title: {type: String, required: true},
    episode_id: {type: String, required: true},
    opening_crawl: {type: String, required: true},
    director: {type: String, required: true},
    producer: {type: String, required: true},
    release_date: {type: String, required: true},
    characters: [{type: String , ref: "Character"}],
    planets: [{type: String , ref: "Planet"}],
   

});

schemaFilms.statics.list = async function() {
    const query = await this.find()
    .populate('characters',['_id','name'])
    .populate('planets',['_id','name'])
    return query;
}

schemaFilms.statics.getById = async function(_id) {
    const query = await this.findById(_id)
    .populate('characters',['_id','name'])
    .populate('planets',['_id','name'])
    return query;
}

schemaFilms.statics.createFilm = async function(film) {
    const query = await this.create(film);
    return query;
}

module.exports = schemaFilms;