var db = require('./db')


function getProjects (req, res) {
  db.listAllProjects()
  .then(projects =>{
    res.render('index',{'projects':projects})
  })
}


module.exports = {
  getProjects: getProjects,
}
