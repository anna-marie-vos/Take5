
exports.up = function(knex, Promise) {
  return knex.schema.createTable('services', function (table) {
    table.increments('discipline_id');
    table.string('discipline_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('services');
};
