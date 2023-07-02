const dataPlanets = require('./planets.json');

module.exports = {
    list: async() =>{
        return dataPlanets;
    },
    create: async() =>{
        throw new Error('Not implemented');
    }
}
