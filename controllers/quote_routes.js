const express = require('express')
// making a router
const router = express.Router()
// importing Fruit model to access database
const Quote = require('../models/quotes')
const Device = require('../models/device')
 //seed doesnt have space after model dr does 

 // DELETE - Delete
router.delete('/:id/delete', (req, res) => {
    const quoteId = req.params.id

    Quote.findByIdAndRemove(quoteId)
        .then(quote => {
            res.redirect('/quotes/myquotes')
        })
        .catch(err => {
            res.json(err)
        })
})


// GET route for displaying an update form
router.get('/:id/edit', (req, res) => {
    const quoteId = req.params.id

    Quote.findById(quoteId)
        .then(quote => {
            Device.find({})
            .then(devices => {
                res.render('quotes/edit', {quote, devices })
            })
            .catch()
        })
        .catch(err => {
            res.json(err)
        })
})

//PUT - Edit
router.put('/:id', (req, res) => {
    const quoteId = req.params.id
    Quote.findByIdAndUpdate(quoteId, req.body, { new: true })
        .then(quote => {
            res.redirect(`/quotes/${quote._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

// GET - New
router.get('/newquote', (req, res) => {
    Device.find({})
        .then(devices => {
            res.render('quotes/new',{devices})
        })
        .catch(err => {
            console.log(error)
            res.json({ error })
        })
    //mongoose to find all devices
   
})

//POST - Create 
router.post('/', (req, res) => {
    // now that we have user specific quotes, we'll add a username upon creation
    // remember, when we login, we saved the username to the session object
    // using the ._id to set the owner field
    
    req.body.owner = req.session.userId

    console.log(req.body)
    Quote.create(req.body)
        .then(quote => {
            console.log(quote)
            // res.json(quote)
            res.redirect('/quotes/myquotes')
        })
        .catch(err => {
            res.json(err)
        })
})


// get index/////////////////////
router.get('/myquotes', (req, res) => {
    // find the quotes associated with the logged in user
    Quote.find({ owner: req.session.userId })
        .then(quotes => {
            res.render('quotes/index', {quotes} )
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})



// router.get ('/seed',(req,res)=> {
//     res.render('./models/seed')
// })

//i need a get to show the form
//this get request needs to find all devices and send them to the quote form ,, allows drop down 

//add show route/:id
router.get('/:id', (req, res) => {
    // find the specific quote associated with the logged in user
    Quote.findById(req.params.id)
        .populate("device")
        .then(quote => {
            // console.log("this the quote")
            // console.log(quote)
            res.render('quotes/show', {quote} )
        })
        .catch(error => {
            // console.log(error)
            res.json({ error })
        })
})
//    res.render('quotes/new', { devices })
//i need a post to process the new quote
//so itll send to the new page 
module.exports = router