
exports.up = function(knex, Promise) {
  return knex.schema.table('hazardLog', function (table) {
    table.string('risk');
  })

};

exports.down = function(knex, Promise) {
    table.dropColumn('risk');
};
