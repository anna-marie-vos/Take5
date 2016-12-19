
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('services').insert({discipline_id: 1,
            discipline_name: 'architectural'}),
        knex('services').insert({discipline_id: 2,
            discipline_name: 'electrical'}),
        knex('services').insert({discipline_id: 3,
            discipline_name: 'ICT'})
      ]);
    });
};
