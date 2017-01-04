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
  var globalProjectId = ""
  return knex('projects')
  .insert(projectData)
  .then(function(project_id){
    globalProjectId = project_id
    return getPpeIds(project_id,newProjectData)
  })
  .then(function(ppeData){
    return insertPpeData(ppeData)
  })
  .then(function(){
    return linkProjectToHazards(globalProjectId)
  })
}

function getPpeIds(project_id,newProjectData){
  var newProjectPpeData = [];
  var keysArray = Object.keys(newProjectData);
  // console.log(keysArray)
  return knex('ppeGear')
  .select('*')
  .then(function(ppeArr){
    for(var x =0;x<ppeArr.length;x++){
      for(var y = 0; y<keysArray.length;y++){
        if(ppeArr[x].ppe_name === keysArray[y]){
          var ppeData = {
            'proj_id': project_id[0],
            'ppeGear_id':ppeArr[x].ppe_id
          }
          newProjectPpeData.push(ppeData)
    } } }
    return newProjectPpeData
  })
}

function insertPpeData(ppeData){
  return knex('projects_ppe')
  .insert(ppeData)
}

function linkProjectToHazards(project_id){
  var data = {
    proj_id: project_id[0],
    haz_id: 1,
    services_id: 1
  }
  return knex('projects_hazards')
  .insert(data)
}

function getPpeGearData(){
  return knex('ppeGear')
  .select('*')
}

function addNewPpeData(newPpeData){
  delete newPpeData.submit
  return knex('ppeGear')
    .insert(newPpeData)
    .select('*')
}

function addNewHazardData(newHazardData, projectID){
    delete newHazardData.submit
    return knex('hazards')
    .insert(newHazardData)
    .then(function(hazard_id){
      return addIdsToProjHazTable(projectID,hazard_id)
    })

}

function addIdsToProjHazTable(projectID,hazard_id){
  return knex('projects_hazards')
  .insert({'proj_id': projectID, 'haz_id':hazard_id[0], 'services_id':1})
}

module.exports = {
  listAllProjects: listAllProjects,
  listProjectData: listProjectData,
  listProjectHazards: listProjectHazards,
  changeProjectData: changeProjectData,
  addNewProjectData:addNewProjectData,
  getPpeGearData: getPpeGearData,
  addNewPpeData:addNewPpeData,
  addNewHazardData: addNewHazardData,
}
