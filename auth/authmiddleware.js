const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

const secrets = require('./secrets')

// confirm user is a valid object prior to registration
const validReg = (req, res, next) => {
    const user = req.body;
    if(!user){
        res.status(401).json({message: "All fields required for registration"})
    } else if (!user.name || !user.email || !user.password){
        res.status(401).json({message: "All fields required for registration"})
    } else if (user.password.length < 8){
        res.status(401).json({message: "Password must be at least 8 characters"})
    } else {
        next();
    }
}
// hash password upon registration
const passHash = (info) => {
    const user = info;
    const hash = bcryptjs.hashSync(user.password, 12)
    user.password = hash;
    return user
}
// confirm user is a valid object prior to login
const validLogin = (user) => {
    return Boolean(user.email && user.password)
}
// create web token upon login
const createToken = user => {
    const payload = {
        sub: user.id,
        name: user.name,
        email: user.email
    }
    const options = {
        expiresIn: '24h'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}
// verify token prior accessing anything
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, secrets.jwtSecret, (err, decToken) => {
            if(err){
                res.status(401).json({message: "unauthorized attempt"})
            } else {
                req.jwt = decToken;
                next()
            }
        })
    } else {
        res.status(401).json({message: "could not verify you, please try again"})
    }
}
module.exports = {
    validReg,
    passHash,
    validLogin,
    createToken,
    verifyToken
}