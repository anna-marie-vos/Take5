
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_hazards').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects_hazards')
        .insert({Proj_haz_id: 1,
            project_id: 1,
            hazard_id: 1 }),
        knex('projects_hazards')
        .insert({Proj_haz_id: 2,
            project_id: 2,
            hazard_id: 2 }),
        knex('projects_hazards')
        .insert({Proj_haz_id: 3,
            project_id: 3,
            hazard_id: 1 }),
        knex('projects_hazards')
        .insert({Proj_haz_id: 4,
            project_id: 3,
            hazard_id: 2 }),
        knex('projects_hazards')
        .insert({Proj_haz_id: 5,
            project_id: 2,
            hazard_id: 3 })
      ]);
    });
};
