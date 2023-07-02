const {list} = require('../data/index')
const {response} = require('../utils/index')

async function getplanets(req, res){
    const data = await list();
    response(res,200,data)
}

module.exports = getplanets;