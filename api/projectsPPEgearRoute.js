const express = require("express");
const route = express.Router();

module.exports = function(db) {
  // GET /api/v1/ppeGear
  route.get("/", get);
  route.post("/", post);

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