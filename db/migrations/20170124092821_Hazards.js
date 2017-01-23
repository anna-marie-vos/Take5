

exports.up = function(knex, Promise) {
  return knex.schema.createTable('hazards', function (table) {
    table.increments('hazard_id');
    table.string('hazard');
    table.string('consequence');
    table.string('photos');
    table.string('existing_mitigation');
    table.string('future_mitigation');
    table.string('add_notice');
    table.string('liklihood');
    table.string('owner');
    table.boolean('eliminated');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('hazards');
};
