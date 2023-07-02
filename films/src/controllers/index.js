const getFilms = require('./getFilms');
const createFilms = require('./createFilms');
const catchAsync = require('../utils/catchAsync');

module.exports = {
    getFilms: catchAsync(getFilms),
    createFilms: catchAsync(createFilms),
}