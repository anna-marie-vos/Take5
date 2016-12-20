
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_ppe').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects_ppe')
          .insert({Proj_ppe_id: 1,
            proj_id:1,
            ppeGear_id:1
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 2,
            proj_id:2,
            ppeGear_id:1
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 3,
            proj_id:3,
            ppeGear_id:1
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 4,
            proj_id:2,
            ppeGear_id:2
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 5,
            proj_id:2,
            ppeGear_id:3
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 6,
            proj_id:3,
            ppeGear_id:4
        }),
        knex('projects_ppe')
          .insert({Proj_ppe_id: 7,
            proj_id:3,
            ppeGear_id:5
        })
      ]);
    });
};
