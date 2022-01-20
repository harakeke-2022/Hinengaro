const express = require('express')
const db = require('../db/index')   // index.js
const router = express.Router()

module.exports = router

// GET /locations
// router.get('/', (req, res) => {
  // TODO: Replace this with all of the locations in the database
//   const locations = [
//     {
//       id: 1,
//       name: 'TangleStage',
//       description: 'Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip.'
//     },
//     {
//       id: 2,
//       name: 'Yella Yurt',
//       description: "It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here! It's a freakin' yurt! Get in here!"
//     }
//   ]

//   const viewData = { locations }
//   res.render('showLocations', viewData)
// })

router.get('/', async (req, res) => {
  try {
    const locations = await db.getAllLocations()
    const viewData = { locations }
    res.render('showLocations', viewData)
  } catch (error) {
    res.redirect('/error')
    console.error(error)
  }
})


// POST /locations/edit
router.post('/edit', (req, res) => {
  // ASSISTANCE: So you know what's being posted ;)
  // const { id, name, description } = req.body

  // TODO: Update the location in the database based on its id

  res.redirect('/locations')
})

// GET /locations/4/edit
router.get('/:id/edit', (req, res) => {
  const id = Number(req.params.id)

  // TODO: Get the location based on its id and replace this viewData
  const viewData = {
    id: id,
    name: 'TangleStage',
    description: 'Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip. Not the biggest stage, but perhaps the most hip.'
  }

  res.render('editLocation', viewData)
})
