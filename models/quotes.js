// using an already connected mongoose not a fresh one from node_modules
const mongoose = require('./connection')


// inside of mongoose I want the keys that are named Schema and model
const { Schema, model } = mongoose

const quoteSchema = new Schema({
    Name: String,
    Number: Number,
    Issue: String,
    Device: String
})

// need to make a model
// this collections will be called devices
const Quote = model('Quote', quoteSchema)

module.exports = Quote
