// using an already connected mongoose not a fresh one from node_modules
const mongoose = require('./connection')
const commentSchema = require('./comment')

// inside of mongoose I want the keys that are named Schema and model
const { Schema, model } = mongoose

const deviceSchema = new Schema({
    make: String,
    model: String,
    repairCost: {
        type: Number,
        default: 25
    }
})

// need to make a model
// this collections will be called devices
const Device = model('Device', deviceSchema)

module.exports = Device
