const router = require('express').Router()
const Vendors = require('./vendorsmodel')

const {verifyToken} = require('../auth/authmiddleware.js')

router.use(verifyToken)

router.post('/', (req, res) => {
    Vendors.add(req.body)
    .then(vendor => {
        res.status(201).json(vendor)
    })
    .catch(error => {
        res.status(500).json({message: "error adding vendor", error})
    })
})

module.exports = router;