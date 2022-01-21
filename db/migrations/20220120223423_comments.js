exports.up = function (knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table.integer('colour_id').references('colour_id')
    table.string('mood')
    table.string('comment')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('comments')
}
