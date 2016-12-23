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
  var projectData ={
    project_number: newProjectData.number,
    project_name: newProjectData.name,
    location: newProjectData.location,
    SWMS: newProjectData.SWMS,
    important_Notices: newProjectData.notice
  }
  return knex('projects')
  .insert(projectData)
  .then(function(project_id){
    return getPpeIds(project_id,newProjectData)
  })
  .then(function(ppeData){
    return insertPpeData(ppeData)
  })
}

function getPpeIds(project_id,newProjectData){
  var newProjectPpeData = [];
  var keysArray = Object.keys(newProjectData);
  return knex('ppeGear')
  .select('*')
  .then(function(ppeArr){
    for(var x =0;x<ppeArr.length;x++){
      for(var y = 0; y<keysArray.length;y++){
        if(ppeArr[x].ppe_name === keysArray[y]){
          newProjectPpeData.push({'proj_id': project_id[0],'ppeGear_id':ppeArr[x].ppe_id})
    } } }
    return newProjectPpeData
  })
}

function insertPpeData(ppeData){
  return knex('projects_ppe')
  .insert(ppeData)
}

function getPpeGearData(){
  return knex('ppeGear')
  .select('*')
}

function addNewPpeData(newPpeData){
  var newPpeItem = {
    ppe_name: newPpeData.ppe_name,
    ppe_image: newPpeData.ppe_image
  }
  console.log(newPpeItem)
  return knex('ppeGear')
    .insert(newPpeItem)
    .select('*')
}

module.exports = {
  listAllProjects: listAllProjects,
  listProjectData: listProjectData,
  listProjectHazards: listProjectHazards,
  changeProjectData: changeProjectData,
  addNewProjectData:addNewProjectData,
  getPpeGearData: getPpeGearData,
  addNewPpeData:addNewPpeData,
}
