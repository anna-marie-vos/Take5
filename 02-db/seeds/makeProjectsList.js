
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({project_id: 1,
              project_number:'122433',
              project_name: 'Aurecon Offices',
              location:'Level 8, 1 Willis street,',
              SWMS:'Not available at present',
              important_Notices:''
            }),
        knex('projects').insert({project_id: 2,
              project_number:'345221',
              project_name: 'Chorus exchange',
              location:'wellington, 3 thorndon street',
              SWMS:'available, link required',
              important_Notices:'Only wooden ladders allowed on site'
            }),
        knex('projects').insert({project_id: 3,
              project_number:'253423',
              project_name: 'GCNZ',
              location:'Christchurch central',
              SWMS:'Available',
              important_Notices:'no personnel allowed on level 2 & 3'
            })
      ]);
    });
};
