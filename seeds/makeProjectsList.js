
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({project_id: 1,
              project_site: 'Aurecon Offices',
              location:'Level 8, 1 Willis street,',
              SWMS:'Not available at present',
              important_Notices:''
            }),
        knex('projects').insert({project_id: 2,
              project_site: 'Chorus exchange',
              location:'wellington, 3 thorndon street',
              SWMS:'available, link required',
              important_Notices:'Only wooden ladders allowed on site'
            }),
        knex('projects').insert({project_id: 3,
              project_site: 'GCNZ',
              location:'Christchurch central',
              SWMS:'Available',
              important_Notices:'no personnel allowed on level 2 & 3'
            })
      ]);
    });
};
