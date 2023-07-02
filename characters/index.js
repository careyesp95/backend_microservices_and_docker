const server = require('./src/server.js');
const PORT_SERVER = process.env.PORT || 8001;

server.listen(PORT_SERVER, () => {
    console.log(`Port ${PORT_SERVER} is listening`);
});