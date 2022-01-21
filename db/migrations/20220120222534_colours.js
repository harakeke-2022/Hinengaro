exports.up = function (knex) {
  return knex.schema.createTable('colours', (table) => {
    table.increments('id').primary()
    table.string('colour')
    table.string('code')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('colours')
}
