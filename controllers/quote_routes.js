const express = require('express')
// making a router
const router = express.Router()
// importing Fruit model to access database
const Quote = require('../models/quotes')
 
// GET - Index
// localhost:3000/devices
router.get('/', (req, res) => {
    //mongoose to find all fruits
    Quote.find()
    // return fruits as json
         .then(quotes => {
            console.log(quotes)
             //res.json(quotes)
            res.render('quotes/index')
         })
         .catch(err => {
            res.json(err)
         })
})
// GET - New
router.get('/newquote', (req, res) => {
    //mongoose to find all fruits
   res.render('quotes/show')
})
// router.get ('/seed',(req,res)=> {
//     res.render('./models/seed')
// })

//i need a get to show the form
//this get request needs to find all devices and send them to the quote form ,, allows drop down 

//    res.render('quotes/new', { devices })
//i need a post to process the new quote
//so itll send to the new page 




module.exports = router