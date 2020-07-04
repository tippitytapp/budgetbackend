//imports
// import server
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');



const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({
        api: "UP"
    })
})

module.exports=server;