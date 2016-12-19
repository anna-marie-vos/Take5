
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ppeGear', function (table) {
    table.increments('ppe_id');
    table.string('ppe_name');
    table.string('ppe_image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ppeGear');
};
