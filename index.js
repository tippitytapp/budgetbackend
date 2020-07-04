// imports
// server import
const server = require('./server/server.js');
// console imports
const colors = require('colors');
// environent variable imports
require('dotenv').config()
const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

server.listen(PORT, ()=>{
    console.log(`\n === Server listening in ${ENV} on http://localhost:${PORT} === \n`.magenta.bold.underline)
})
