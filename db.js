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
  .then(transformData)
}

function listProjectHazards(projectID){
  return knex('projects_hazards')
  .join('projects','proj_id','=','projects.project_id')
  .join('hazards','haz_id','=','hazards.hazard_id')
  .join('services','services_id','=','services.discipline_id')
  .select('*')
  .where('projects.project_id',projectID)
  .then(transformData)
}

function transformData(projectData){
  var transformedData = {
    'projectData': projectData[0],
    'allData':projectData
  }
  return transformedData
}

module.exports = {
  listAllProjects: listAllProjects,
  listProjectData: listProjectData,
  listProjectHazards: listProjectHazards,
}
