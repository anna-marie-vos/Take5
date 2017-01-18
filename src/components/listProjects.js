const React = require('react')

module.exports = function(props){
  console.log('listProjects.js props', props);
  const {projectData, store} = props

  return (
    <tr>
      <td>{projectData.project_number}</td>
      <td>{projectData.project_name}</td>
      <td>{projectData.important_Notices}</td>
    </tr>
  )
}
