const React = require('react')
const request = require('superagent')
const { connect } = require('react-redux')

class ProjectData extends React.Component {

  render(){
    return (
      <div className="row">
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
}
module.exports = connect((state) => state)(ProjectData)
