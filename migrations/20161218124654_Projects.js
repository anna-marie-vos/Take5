
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('project_id');
    table.integer('project_number');
    table.string('project_name');
    table.string('location');
    table.string('SWMS');
    table.string('important_Notices');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('projects');
};
