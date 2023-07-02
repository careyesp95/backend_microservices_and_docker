const {response} = require('../utils/index.js');
const characters = require('../data/index.js');

async function createCharacters(req,res){
    const dataCreate = await characters.create();

    response(res, 200, dataCreate);
}

module.exports = createCharacters;