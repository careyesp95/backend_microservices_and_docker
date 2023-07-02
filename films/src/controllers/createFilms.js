const {response} = require('../utils/index');
const dataHandleFilms = require('../data/index');

async function createFilms(req, res) {
    const data = await dataHandleFilms.create();
    response(res,201,data)
}

module.exports = createFilms;