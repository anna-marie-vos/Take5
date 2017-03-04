const React = require('react')
const debug = require('debug')('components:projectData')

module.exports = function(props){
  debug({props})


  return (
    <div className="row">
      <nav>
        <button className="button" href="#">Edit Project</button>
        <button className="button" href="#">Project Hazard Log</button>
      </nav>
      <article>
        <p><strong>Project Number: </strong>project_number</p>
        <p><strong>Project Name: </strong>project_name</p>
        <p><strong>Location: </strong>location</p>
        <p><strong>SWMS: </strong>SWMS</p>
        <p><strong>Notices: </strong>important_Notices</p>
      </article>
      <article>
        <p><strong>PPE: </strong>ppe Gear here</p>
      </article>
    </div>
  )
}
