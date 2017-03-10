
const React = require('react')
const { Link } = require('react-router')
const request = require('superagent')
const ListProjectPpe = require('./listProjectPpe')

const projectInfo = (props) => {
  // console.log('projectInfo, ', props);
  const { ppe , project } = props
  const {project_number, project_name, project_id,
    location, SWMS, important_Notices} = project

  return (
    <div className="row">
      <article>
        <p><strong>Project Number: </strong>  {project_number} </p>
        <p><strong>Project Name: </strong>  {project_name} </p>
        <p><strong>Location: </strong>{location}</p>
        <p><strong>SWMS: </strong>{SWMS}</p>
        <p><strong>Notices: </strong>{important_Notices}</p>
      </article>
      <ListProjectPpe ppe={ppe}/>
    </div>
  )
}

module.exports = projectInfo
