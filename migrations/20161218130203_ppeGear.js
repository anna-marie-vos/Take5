
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ppeGear', function (table) {
    table.increments('project_id');
    table.string('project_site');
    table.string('location');
    table.string('SWMS');
    table.string('required_PPE');
    table.string('important_Notices');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ppeGear');
};
