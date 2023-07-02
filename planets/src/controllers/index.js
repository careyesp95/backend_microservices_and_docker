const getplanets = require('./getPlanets');
const createPlanets = require('./createPlanets');
const catchAsync = require('../utils/catchAsync');

module.exports = {
    getplanets:catchAsync(getplanets),
    createPlanets:catchAsync(createPlanets),
}