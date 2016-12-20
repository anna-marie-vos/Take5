
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects_ppe', function (table) {
    table.increments('Proj_ppe_id');
    table.string('project_id');
    table.string('ppe_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects_ppe');
};
