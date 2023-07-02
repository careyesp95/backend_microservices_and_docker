const dataFilms = require('../data/index');
const {response} = require('../utils/index');

async function getFilms (req,res){
    const data = await dataFilms.list();
    response(res,200,data);
}

module.exports = getFilms;