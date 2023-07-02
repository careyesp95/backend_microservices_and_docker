const {response} = require('../utils/index');
const {create} = require('../data/index')

async function createPlanets (req,res){
    const data = await create();
    response(res,201,data)
}

module.exports = createPlanets;