
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_ppe').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects_ppe')
          .insert({Proj_ppe_id: 1,
            project_id:1,
            ppe_id:1
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 2,
            project_id:2,
            ppe_id:1
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 3,
            project_id:3,
            ppe_id:1
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 4,
            project_id:2,
            ppe_id:2
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 5,
            project_id:2,
            ppe_id:3
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 6,
            project_id:3,
            ppe_id:4
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 7,
            project_id:3,
            ppe_id:5
        })
      ]);
    });
};
