const express = require("express");
const route = express.Router();

module.exports = function(db) {
  // GET api/v1/
  route.get("/projects", getAllProjects);
  route.post("/", post);

  function getAllProjects(req, res, next) {
    db.getTableData('projects')
    .then(data =>{
      res.json({'projects': data});
    })
    // db.get()
  }

  function post(req, res, next) {}

  return route;
};
