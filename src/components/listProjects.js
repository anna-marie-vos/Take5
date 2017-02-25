const React = require('react')
const ProjectData = require('./projectData')

const Router = require('react-router').Router
const Route = require('react-router').Route
const Link = require('react-router').Link


module.exports = function(props){
  const {projectData, store} = props
  // const {project_id, project_name, important_Notices} = projectData
  console.log('props',props);
  return (
    <tr>
      <td>
        <Link to={`/${ProjectData}`}>
          {projectData.project_number}
        </Link>
      </td>

      <td>
      </td>
      <td>{important_Notices}</td>
    </tr>
  )
}
// <button onClick={ () =>
//   store.dispatch(projectSpecificData(project_id)) }>
//   {project_name}
//   </button>

// function projectSpecificData(project_id){
//   return {type:"PROJECT_DETAILS", payload:project_id}
// }
