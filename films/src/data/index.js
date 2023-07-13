const axios = require('axios');

module.exports = {
    list: async ()=> {
        const result = await axios.get('https://database:8004/films');
        return result.data;
    },
    create: async () => {
        throw new Error('BD not found');
    }
}