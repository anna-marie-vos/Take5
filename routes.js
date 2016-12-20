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

function editProjectData(req, res){
  var projectID = Number(req.params.id)
  db.listProjectData(projectID)
    .then(function(projectData){
      res.render('editProject',projectData)
    })
}

function addProjectDataChanges(req,res){
  var changedData = req.body
  console.log(changedData)
  res.redirect('index/'+changedData.id)
}

module.exports = {
  getProjects: getProjects,
  getProjectData: getProjectData,
  getProjectHazardLog: getProjectHazardLog,
  editProjectData: editProjectData,
  addProjectDataChanges:addProjectDataChanges,
}
