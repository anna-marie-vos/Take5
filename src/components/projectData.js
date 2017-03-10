const React = require('react')
const request = require('superagent')
const { connect } = require('react-redux')

class ProjectData extends React.Component {

  componentDidMount(){
    // console.log('projectData, ',this.props);
    const dispatch = this.props.dispatch
    const project_id = this.props.params.id
    request.get(`api/v1/project/${project_id}`)
    .end((err,res)=>{
      if (err) return console.log('error', err)
      dispatch({type:'CURRENT_PROJECT', payload:res.body})
    })

  }

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
