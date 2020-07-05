const router = require('express').Router()
const Trans = require('./transactionsmodel')

const {verifyToken} = require('../auth/authmiddleware.js')

router.use(verifyToken)

router.post('/', (req, res) => {
    Trans.add(req.body)
    .then(trans => {
        res.status(201).json(trans)
    })
    .catch(error => {
        res.status(500).json({message: 'couldnt add transaction', error})
    })
})

module.exports = router;