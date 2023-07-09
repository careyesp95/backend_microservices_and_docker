const { dontenv } = require('dontenv');
dontenv.config();

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
}