const express = require("express");
const route = express.Router();

module.exports = function(db) {
  // GET api/v1/
  route.get("/", getAllProjects);
  route.get("/:id", getCurrentProject);
  route.post("/", post);

  function getAllProjects(req, res, next) {
    db.getAllProjects('projects')
    .then(data =>{
      res.json({'projects': data});
    })
  }

  function getCurrentProject(req, res, next) {
    db.getProjectAndPpeById(req.params.id)
    .then(projData =>{
      res.json(projData);
    })
  }

  function post(req, res, next) {}

  return route;
};
