const server = require('./src/server.js');
const port  = 8001;

server.listen(port, () => {
    console.log(`Port ${port} is listening`);
});