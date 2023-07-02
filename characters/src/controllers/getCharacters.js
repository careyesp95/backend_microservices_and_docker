const dataCharacters = require('../data/index.js');
const { response } = require('../utils/index.js');

async function getCharacters(req, res){
    let data = await dataCharacters.list();
    response(res, 200, data);
}

module.exports = getCharacters;