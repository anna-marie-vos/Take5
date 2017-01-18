const React = require('react')
const ProjectData = require('./projectData')

const Router = require('react-router').Router
const Route = require('react-router').Route
const Link = require('react-router').Link


module.exports = function(props){
  console.log('listProjects.js props', props);
  const {projectData, store} = props

  return (
    <tr>
      <td><Link to={`/${ProjectData}`}>
            {projectData.project_number}</Link></td>
      <td><a href="#">
            {projectData.project_name}</a></td>
      <td>{projectData.important_Notices}</td>
    </tr>
  )
}
