exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('colours').del()
    .then(function () {
      // Inserts seed entries
      return knex('colours').insert([
        { id: 1, colour: 'Electric purple', code: '#9217FF' },
        { id: 2, colour: 'Azure blue', code: '#1788FF' },
        { id: 3, colour: 'Salamander Orange', code: '#FF5733' },
        { id: 4, colour: 'Crimson red', code: '#D60202' },
        { id: 5, colour: 'Shamrock green', code: '#3EC200' }

      ])
    })
}
