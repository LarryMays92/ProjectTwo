const express = require("express");
// making a router
const router = express.Router();
// importing Fruit model to access database
const Device = require("../models/device");

// GET - Index
// localhost:3000/devices
router.get("/", (req, res) => {
  // mongoose to find all fruits
  Device.find({})
    // return device as json
    .then((device) => {
      res.json(devices);
      //res.render('devices/index')
    })
    .catch((err) => {
      res.json(err);
    });
});

// seed route --> has been moved to models/seed.js
// insert many items into our database with just going to this route
// localhost:3000/devices/seed
router.get("/seed", (req, res) => {
  // starting data
  const startDevices = [
    { make: "apple ", model: "iphone 12 pro max ", repairCost: 25 },
    { make: "Samsung ", model: "Galaxy s20", repairCost: 35 },
    { make: "Google ", model: "Pixel 4" },
    { make: "LG ", model: "Stylo 6" },
    { make: "apple ", model: "iphone 11 pro ", repairCost: 35 },
    { make: "apple ", model: "iphone 12 pro ", repairCost: 35 },
    { make: "apple ", model: "iphone 12 ", repairCost: 30 },
    { make: "apple ", model: "iphone 11 mini", repairCost: 25 },
    { make: "Motorola ", model: "G Stylus ", repairCost: 45 },
    { make: "apple ", model: "iphone XR", repairCost: 30 },
  ];
  // delete if we have quotes
  Device.deleteMany({})
    // insert data
    .then(() => {
      Device.create(startDevices)
        // return this data as json to view
        .then((data) => {
          res.json(data);
        })
        // .catch(err => console.error(err))
        .catch(console.error);
    });
});

module.exports = router;
