const router = require('express').Router()

const Users = require('./usersmodel.js')
const {verifyToken} = require('../auth/authmiddleware.js')

router.use(verifyToken)
router.get('/', (req, res) => {
    Users.getAll()
        .then(users => {
            if(users.length === 0){
                res.status(404).json({
                    message: "no users found"
                })
            }else{
                res.status(200).json(users)
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "error retrieving users",
                error
            })
        })
})

module.exports = router;