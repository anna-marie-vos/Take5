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
            console.log(projectData)
            res.render('projectData')
        })
}


module.exports = {
  getProjects: getProjects,
  getProjectData: getProjectData,
}
