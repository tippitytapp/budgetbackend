const router = require('express').Router()
const bcryptjs = require('bcryptjs')

const Users = require('../users/usersmodel.js')

const {validReg, passHash, validLogin, createToken, verifyToken} = require('./authmiddleware.js')

router.post('/register',validReg, (req, res) => {
    const user = req.body;
    const newUser = passHash(user);
    const email = user.email;
    Users.findByFilter({email})
        .then(user => {
            if(user.length > 0){
                res.status(400).json({message: "account already exists with that email"})
            } else {
                Users.add(newUser)
                .then(user => {
                    res.status(201).json(user)
                })
                .catch(error => {
                    res.status(500).json({message: "could not add user", error})
                })
            } 
        })
})
router.post('/login', (req, res) => {
    const {email, password} = req.body;
    if(validLogin(req.body)){
        Users.findByFilter({email})
            .then(([user]) => {
                if(user && bcryptjs.compareSync(password, user.password)){
                    token = createToken(user)
                    res.status(200).json({message: "Logged in", user, token})
                }
            })
            .catch(error => {
                res.status(404).json({message: "no account with that email", error})
            })
    } else {
        res.status(400).json({message: "please ensure your username and password are correct"})
    }
})
module.exports = router;