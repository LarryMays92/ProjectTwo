/////////////////////////////////
// import dependencies
/////////////////////////////////
// this allows us to load our env variables
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const deviceRoutes = require('./controllers/device_routes')
const quoteRoutes = require ('./controllers/quote_routes')
const userRoutes = require('./controllers/user_routes')
////////////////////////////////////////////
// Create our express application object
////////////////////////////////////////////
const app = require('liquid-express-views')(express())
const session = require('express-session')
const MongoStore = require('connect-mongo')
// here's the middleware that sets up our sessions
app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.MONGODB_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)

////////////////////////////////////////////
// Middleware
////////////////////////////////////////////
// this is for request logging
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
// parses urlencoded request bodies
app.use(express.urlencoded({ extended: false }))
// to serve files from public statically
app.use(express.static('public'))
app.use('/devices', deviceRoutes)
app.use('/quotes', quoteRoutes )
app.use('/users', userRoutes)

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get('/', (req, res) => {
	res.send('your server is running, better go catch it')
})

////////////////////////////////////////////
// Server Listener
////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(process.env.PORT||3000, () => {
	console.log(`app is listening on port: ${PORT}`)
})