
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_hazards').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects_hazards')
        .insert({Proj_haz_id: 1,
            proj_id: 1,
            services_id: 1,
            haz_id: 1 }),
        knex('projects_hazards')
        .insert({Proj_haz_id: 2,
            proj_id: 2,
            services_id: 2,
            haz_id: 2 }),
        knex('projects_hazards')
        .insert({Proj_haz_id: 3,
            proj_id: 3,
            services_id: 3,
            haz_id: 1 }),
        knex('projects_hazards')
        .insert({Proj_haz_id: 4,
            proj_id: 3,
            services_id:4,
            haz_id: 2 }),
        knex('projects_hazards')
        .insert({Proj_haz_id: 5,
            proj_id: 2,
            services_id: 1,
            haz_id: 3 })
      ]);
    });
}
