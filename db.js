var development = require('./knexfile')['development']
var knex = require('knex')(development)

function listAllProjects (){
  return knex('projects')
  .select('*')
}



module.exports = {
  listAllProjects: listAllProjects,
}
