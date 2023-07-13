const dataPlanets = require('./planets.json');
const axios = require('axios');

module.exports = {
    list: async() =>{
        const result = await axios.get('https://database:8004/planets');
        return result.data;
    },
    create: async() =>{
        throw new Error('Not implemented');
    }
}
