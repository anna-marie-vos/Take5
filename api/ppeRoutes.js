const express = require("express");
const route = express.Router();

module.exports = function(db) {
  // GET /api/v1/ppe
  route.get("/", getPpeGear);
  route.post("/", post);

  function getPpeGear(req, res, next) {
    db.getTableData('ppeGear')
    .then(data =>{
      res.json({'ppe': data});
    })
    // db.get()
  }

  function post(req, res, next) {}

  return route;
};
