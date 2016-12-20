var db = require('./db')


function getProjects (req, res) {
  db.listAllProjects()
  .then(projects =>{
    res.render('index',{'projects':projects})
  })
}

function getProjectData(req, res){
  var ProjectID = Number(req.params.id)

    db.listProjectData(ProjectID)
        .then(function(projectData){
          res.render('projectData',{'projectData': projectData[0],'ppeData':projectData})
        })
}

function getProjectHazardLog(req, res){
  var ProjectID = Number(req.params.id)
  res.render('hazardLog')
}

module.exports = {
  getProjects: getProjects,
  getProjectData: getProjectData,
  getProjectHazardLog: getProjectHazardLog,
}
