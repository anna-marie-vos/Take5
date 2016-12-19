
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({project_id: 1, project_site: 'rowValue1',location:'',SWMS:'',important_Notices:''}),
        knex('projects').insert({project_id: 2, project_site: 'rowValue2',location:'',SWMS:'',important_Notices:''}),
        knex('projects').insert({project_id: 3, project_site: 'rowValue3',location:'',SWMS:'',important_Notices:''})
      ]);
    });
};

table.increments('project_id');
table.string('project_site');
table.string('location');
table.string('SWMS');
table.string('important_Notices');
