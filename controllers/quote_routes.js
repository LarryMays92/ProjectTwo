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
         .then(quote => {
            console.log(quote)
             //res.json(quote)
            res.render('quotes/index')
         })
         .catch(err => {
            res.json(err)
         })
})

router.get('/myquotes', (req, res) => {
    // find the fruits associated with the logged in user
    console.log("a",req.session.userID)
    Quote.find({ owner: req.session.userId })
        .then(quote => {
            res.render('quotes/show', )
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})


// GET - New
router.get('/newquote', (req, res) => {
    //mongoose to find all fruits
   res.render('quotes/new')
})

//POST - Create 
router.post('/', (req, res) => {
    // now that we have user specific fruits, we'll add a username upon creation
    // remember, when we login, we saved the username to the session object
    // using the ._id to set the owner field
    
    req.body.owner = req.session.userId

    console.log(req.body)
    Quote.create(req.body)
        .then(quote => {
            console.log(quote)
            // res.json(fruit)
            res.redirect('/quotes')
        })
        .catch(err => {
            res.json(err)
        })
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