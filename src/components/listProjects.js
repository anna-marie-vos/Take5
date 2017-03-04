const React = require('react')
const debug = require('debug')('components:listProjects')
const ProjectData = require('./projectData')

const Router = require('react-router').Router
const Route = require('react-router').Route
const Link = require('react-router').Link

const PorjectData = require('./projectData')


module.exports = function(props){
  debug({props})

  return (
    <div>
      <Link to="/projects/1">
        Project Data
      </Link>
      <div>important notice</div>
    </div>
  )
}
