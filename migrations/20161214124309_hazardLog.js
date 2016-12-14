
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hazardLog', function (table) {
    table.increments();
    table.string('project_site');
    table.string('user');
    table.string('hazard');
    table.string('photos');
    table.string('add_notice');
    table.string('mitigation');
    table.string('owner');
    table.string('liklihood');
    table.string('consequence');
    table.boolean('eliminated');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hazardLog');
};
