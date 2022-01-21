exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          colour_id: 1,
          mood: 'You are feeling passionate but hungry at the same time',
          comment: 'Priortize your physical needs and utilize this energy to acheive your goals.'
        },
        {
          id: 2,
          colour_id: 2,
          mood: 'You are feeling calm but slightly agitated',
          comment: 'Make sure you address your agitation to fully attain your sense of calmness.'
        },
        {
          id: 3,
          colour_id: 3,
          mood: 'You are feeling unsettled - maybe it has something to do with the noises you heard last night.',
          comment: 'Face your fears and get a medium PRONTO!'
        },
        {
          id: 4,
          colour_id: 4,
          mood: 'You are feeling angry, maybe because you have not fully processed the struggles from learning.',
          comment: 'Just remember what Ahmad said during lectures - it is okay!'
        },
        {
          id: 5,
          colour_id: 5,
          mood: 'You are feeling giddy, cos you made it to FriYAY and you are thriving.',
          comment: 'Validate your success and go sing your heart out tonight!!'
        }
      ])
    })
}
