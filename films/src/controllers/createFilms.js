const {response} = require('../utils/index');
const {create} = require('../data/index');

async function createFilms(req, res) {
    const data = await create();
    response(res,201,data)
}

module.exports = createFilms;