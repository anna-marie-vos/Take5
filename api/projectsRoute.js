const express = require("express");
const route = express.Router();

module.exports = function(db) {
  // GET api/v1/
  route.get("/projects", getAllProjects);
  route.get("/project/:id", getCurrentProject);
  route.post("/", post);

  function getAllProjects(req, res, next) {
    db.getTableData('projects')
    .then(data =>{
      res.json({'projects': data});
    })
  }

  function getCurrentProject(req, res, next) {
    console.log('req.', req.params.id);
    db.getTableData('projects')
    .then(data =>{
      res.json({'projects': data});
    })
  }

  function post(req, res, next) {}

  return route;
};
