const dataFilms = require('./films.json');

module.exports = {
    list: async ()=> {
        return dataFilms;
    },
    create: async () => {
        throw new Error('BD not found');
    }
}