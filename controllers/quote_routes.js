const express = require('express')
// making a router
const router = express.Router()
// importing Fruit model to access database
const Quote = require('../models/quotes')
 
// GET - Index
// localhost:3000/devices
router.get('/', (req, res) => {
    // mongoose to find all fruits
    // Device.find({})
    // return fruits as json
        // .then(device => {
        //      //res.json(devices)
            res.render('quotes/index')
        // })
        // .catch(err => {
        //     res.json(err)
        // })
})

module.exports = router