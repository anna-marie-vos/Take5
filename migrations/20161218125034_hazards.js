
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hazards', function (table) {
    table.increments('hazard_id');
    table.string('hazard');
    table.string('consequence');
    table.string('photos');
    table.string('Existing_mitigation');
    table.string('Future_mitigation');
    table.string('add_notice');
    table.string('owner');
    table.string('liklihood');
    table.string('consequence');
    table.boolean('eliminated');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('hazards');
};
