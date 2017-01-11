var express = require('express')
var route = express.Router()

module.exports = routing

function routing(db){
  // GET api/v1/Take5/Projects
  route.get('/', get)
  route.post('/', post)

  function get (req, res, next) {
     db.find('projects', {})
       .then((projects) => {
         res.json({ data: projects })
       })
       .catch(next)
   }

  function post (req, res, next) {
     db.add('projects', req.body)
       .then((projects) => {
         res.json({ data: projects })
       })
       .catch(next)
   }

   return route

}
