const express = require("express");
const route = express.Router();

module.exports = function(db) {
  // GET /api/v1/projects_ppe
  route.get("/", get);
  route.post("/", post);
    // route.get("/:id", getPPEByProject);

  function get(req, res, next) {
    db.getProjectAndPPEData('projects_ppe')
    .then(data =>{
      res.json({'data': data});
    })
    // db.get()
  }

  function post(req, res, next) {}

  return route;
};
