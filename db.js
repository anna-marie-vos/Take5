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

function changeProjectData(projectData, projectID){
  return knex('projects')
  .where('projects.project_id', projectID)
  .update({
    project_number: projectData.number,
    project_name: projectData.name,
    location: projectData.location,
    SWMS: projectData.SWMS,
    important_Notices: projectData.notice
  })
}

function transformData(projectData){
  var transformedData = {
    'projectData': projectData[0],
    'allData':projectData
  }
  return transformedData
}

function addNewProjectData(newProjectData){
  var data ={
    project_number: newProjectData.number,
    project_name: newProjectData.name,
    location: newProjectData.location,
    SWMS: newProjectData.SWMS,
    important_Notices: newProjectData.notice
  }
  return knex.insert(data).into('projects')
  .select('*')
}

function getPpeGearData(){
  return knex('ppeGear')
  .select('*')
}

module.exports = {
  listAllProjects: listAllProjects,
  listProjectData: listProjectData,
  listProjectHazards: listProjectHazards,
  changeProjectData: changeProjectData,
  addNewProjectData:addNewProjectData,
  getPpeGearData: getPpeGearData,
}
