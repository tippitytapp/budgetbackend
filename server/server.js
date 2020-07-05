//imports
// import server
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const UsersRouter = require('../users/usersrouter.js')
const AuthRouter = require('../auth/authrouter.js')
const TransRouter = require('../transactions/transactionsrouter.js')
const VendorRouter = require('../vendors/vendorsrouter.js')


const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/users', UsersRouter)
server.use('/auth', AuthRouter)
server.use('/user/:id/trans', TransRouter)
server.use('/vendors', VendorRouter)


server.get('/', (req, res) => {
    res.status(200).json({
        api: "UP"
    })
})

module.exports=server;