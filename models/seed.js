// ///////////////////////////////////////
// // This file runs on `npm run seed`
// ///////////////////////////////////////

// ///////////////////////////////////////
// // Import Dependencies
// ///////////////////////////////////////
// const mongoose = require('./connection')
// const Device = require('./device.js')

// ///////////////////////////////////////
// // Seed Code
// ///////////////////////////////////////
// // save my db connection to a variable for easy reference later
// const db = mongoose.connection

// // this runs the callback function when the db connection is opened from this file
// db.on('open', () => {
//     // array of starter devices
//     const startDevices = [
//         {
//             make: "apple",
//             model: "iphone 12 pro max ",
//             repairCost: 25
//         },
//         {
//             make: "Samsung",
//             model: "Galaxy s20",
//             repairCost: 35
//         },
//         {
//             make: "Google",
//             model: "Pixel 4"
//         },
//         {
//             make: "LG",
//             model: "Stylo 6"
//         },
//         {
//             make: "apple",
//             model: "iphone 11 pro ",
//             repairCost: 35
//         },
//         {
//             make: "apple",
//             model: "iphone 12 pro ",
//             repairCost: 35
//         },
//         {
//             make: "apple",
//             model: "iphone 12 ",
//             repairCost: 30
//         },
//         {
//             make: "apple",
//             model: "iphone 11 mini" ,
//             repairCost: 25
//         },
//         {
//             make: "Motorola",
//             model: "G Stylus ",
//             repairCost: 45
//         },
//         {
//             make: "apple",
//             model: "iphone XR",
//             repairCost: 30
//         }
//     ]

//     // when we seed data, we usually clear out the db first
//     Device.remove({})
//     // then we create that data
//         .then(deletedDevice => {
//             console.log('this is what remove returns', deletedDevice)

//             // now that our delete was successful, we can create our quotes
//             Device.create(startDevices)
//                 .then(data => {
//                     console.log('the new devices', data)
//                     db.close()
//                 })
//                 .catch(error => {
//                     console.log('error:', error)
//                     db.close()
//                 })
//         })
//         .catch(error => {
//             console.log('error:', error)
//             db.close()
//         })
//     // whether it's successful or not, we want to close our db connection
// })