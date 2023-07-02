const catchAsync = require('../utils/catchAsync');
const getCharacters = catchAsync(require('./getCharacters'));
const createCharacters = catchAsync(require('./createCharacters'));

module.exports = {
    getCharacters:catchAsync(getCharacters),
    createCharacters:catchAsync(createCharacters),

};