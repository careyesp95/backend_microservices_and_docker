const store = require('../database/index.js');

async function getCharacters (req,res){
    const {model} = req.params;
    const allCharacters = await store[model].list()
    res.status(200).json(allCharacters);
}

async function getCharacterById (req,res){
    const {model,id} = req.params;
    const character = await store[model].getById(id)
    res.status(200).json(character);
}
module.exports = {
    getCharacters,
    getCharacterById
};