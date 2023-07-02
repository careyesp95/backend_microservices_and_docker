const dataCharacters = require('./characters.json');

module.exports = {
    list: async () => {
        return dataCharacters;
    },
    create:async () => {
        throw new Error('no implementado');
    }
};