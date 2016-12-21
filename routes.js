var db = require('./db')


function getProjects (req, res) {
  db.listAllProjects()
  .then(projects =>{
    res.render('index',{'projects':projects})
  })
}

function getProjectData(req, res){
  var projectID = Number(req.params.id)

  db.listProjectData(projectID)
    .then(function(projectData){
      res.render('projectData',projectData)
    })
}

function getProjectHazardLog(req, res){
  var projectID = Number(req.params.id)

  db.listProjectHazards(projectID)
    .then(function(projectData){
      res.render('hazardLog', projectData)
    })
}

function getProjectEditForm(req, res){
  var projectID = Number(req.params.id)
  db.listProjectData(projectID)
    .then(function(projectData){
      res.render('editProject',projectData)
    })
}

function editProjectData(req,res){
  var changedData = req.body
  var projectID = searchUrlForNumber(req.headers.referer)

  db.changeProjectData(changedData,projectID)
  .then(function(projectData){
    res.redirect('index/'+projectID)
  })
}

function searchUrlForNumber(url){
  var arr = url.split('/')
  var id = Number(arr[arr.length-2])
  return id
}

function getNewProjectForm(req, res){
  db.getPpeGearData()
  .then(function(ppeData){
    res.render('newProject',{'ppeData':ppeData})
  })
}

function addNewProjectData(req, res){
  var newProjectData = req.body
  db.addNewProjectData(newProjectData)
  .then(function(){
    res.redirect('/')
  })
}

function addPPEDataToProject(req, res){
  newPpeData = req.body
  console.log(newPpeData)
  db.addNewPpeData(newPpeData)
  .then(function(){
    res.redirect('/')
  })
}

module.exports = {
  getProjects: getProjects,
  getProjectData: getProjectData,
  getProjectHazardLog: getProjectHazardLog,
  getProjectEditForm: getProjectEditForm,
  editProjectData:editProjectData,
  getNewProjectForm:getNewProjectForm,
  addNewProjectData:addNewProjectData,
  addPPEDataToProject:addPPEDataToProject,
}
