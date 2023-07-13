const dataCharacters = require('./characters.json');
const axios = require('axios');

module.exports = {
    list: async () => {
        const result = await axios.get('https://database:8004/character');
        return result.data;
    },
    create:async () => {
        throw new Error('no implementado');
    }
};