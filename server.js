const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

// This is where we know about the routes in the server
const moods = require('./routes/moods.js')

// const scheduleRoutes = require('./routes/schedule.js')
// const eventRoutes = require('./routes/events.js')

/*
 * create the server
*************************/

const server = express()
module.exports = server

/*
 * configure the server
 *************************/

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

/*
 * define the routes
 *************************/

<<<<<<< HEAD
server.get('/', (req, res) => {
  res.redirect('/homepage')
})

server.use('/homePage', moods)
=======
server.use('/', moods)
>>>>>>> ca7525fcf7beeb7a6e7c7ec628fd80758d5a5541
// server.use('/schedule', scheduleRoutes)
// server.use('/events', eventRoutes)
