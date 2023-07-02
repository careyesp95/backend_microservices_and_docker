const {response} = require('../utils/index');
const dataHandlePlanets = require('../data/index');

async function createPlanets (res,req){
    const data = await dataHandlePlanets.create(req.body);
    response(res,201,data)
}

module.exports = createPlanets;