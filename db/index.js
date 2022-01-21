const config = require('./knexfile').development
const database = require('knex')(config)

function getAllLocations (db = database) {
  return db('locations')
    .select()
}

function getName () {

}

// function getEventsByDay(day, db = database) {
//     return db('events')
//         .join('locations', 'events.location_id', 'locations.id')
//         .where('day', day)
//         .select(
//             'events.id as eventId',
//             'day',
//             'time',
//             'events.name as eventName',
//             'events.description as eventDescription',
//             'locations.id as locationsId',
//             'locations.name as locationsName',
//             'locations.description as locationsDescription'
//         )
// }

module.exports = {
//   getAllLocations,
//   getEventsByDay
}
