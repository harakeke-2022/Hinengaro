const express = require('express')
const db = require('../db/index') // index.js
const router = express.Router()

// const { eventDays, capitalise, validateDay } = require('../helpers')

module.exports = router

// Our main page routes go here
router.get('/', async (req, res) => {
  try {
    res.render('homepage')
  } catch (error) {
    res.redirect('/error')
    console.error(error)
  }
})

// Push name
// router.post('/page2', (req, res) => {
//   console.log(req.body)
//   const name = req.body
//   res.render('page2', name)
// })

// Generate random comments - second page
router.get('/page2', (req, res) => {
  const viewData = {
    user: 'Steve Puce',
    colour: 'Shamrock Green',
    mood: 'You are feeling giddy, cos you made it to FriYAY and you are thriving.',
    comment: 'Validate your success and go sing your heart out tonight!!'
  }
  res.render('page2', viewData)
})
// try {
//   const comments = await db.getAllComments()
//   const viewData = { comments }
//   function getRandomInt (max) {
//     return Math.floor(Math.random() * max)
//   }

// Our routes go here

//   router.get('/:id', async (req, res) => {
//     const id = Nu>>>>>>> ca7525fcf7beeb7a6e7c7ec628fd80758d5a5541mber(req.params.id) - 1
//     try {
//       const comments = await db.getAllComments()
//       const viewData = { comments }
//       res.render('showComments', viewData)
//     } catch (error) {
//       res.redirect('/error')
//       console.error(error)
//     }
//   })

// Route for individual restaurants
// router.get('/:id', (req, res) => {
//   const id = Number(req.params.id) - 1
//   fsPromises.readFile('./data.json', 'utf8')
//     .then((foodSpots) => {
//       const realFoodData = JSON.parse(foodSpots)
//       res.render('details', realFoodData.restaurants[id])
//       return null
//     })
//     .catch ((err) => {
//       console.log(err)
//     })
// })

// Generate random ID for button
// router.get('/random', (req,res)=> {
//   function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//      }
//      res.redirect(`/${getRandomInt(10) + 1}`)
// })
