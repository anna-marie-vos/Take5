
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects_hazards', function (table) {
    table.increments('Proj_haz_id');
    table.string('proj_id');
    table.string('haz_id');
    table.string('services_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects_hazards');
};
