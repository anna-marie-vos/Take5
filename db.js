var development = require('./knexfile')['development']
var knex = require('knex')(development)

function listAllProjects (){
  return knex('projects')
  .select('*')
}

function listProjectData(projectID){
  return knex('projects_ppe')
  .join('projects','proj_id','=','projects.project_id')
  .join('ppeGear','ppeGear_id','=','ppeGear.ppe_id')
  .select('*')
  .where('projects.project_id',projectID)
}

function listProjectHazards(projectID){
  return knex('projects_hazards')
  .join('projects','proj_id','=','projects.project_id')
  .join('hazards','haz_id','=','hazards.hazard_id')
  .join('services','services_id','=','services.discipline_id')
  .select('*')
  .where('projects.project_id',projectID)
}


module.exports = {
  listAllProjects: listAllProjects,
  listProjectData: listProjectData,
  listProjectHazards: listProjectHazards,
}
