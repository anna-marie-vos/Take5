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
          res.render('projectData',{'projectData': projectData[0],'ppeData':projectData})
        })
}

function getProjectHazardLog(req, res){
  var projectID = Number(req.params.id)

  db.listProjectHazards(projectID)
    .then(function(projectData){
      console.log(projectData)
      res.render('hazardLog',{'projectData': projectData[0],'hazardData':projectData})
    })
}

module.exports = {
  getProjects: getProjects,
  getProjectData: getProjectData,
  getProjectHazardLog: getProjectHazardLog,
}
