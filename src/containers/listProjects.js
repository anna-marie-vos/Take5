const React = require('react')
// const debug = require('debug')('components:listProjects')
const Link = require('react-router').Link
const { connect } = require('react-redux')
const request = require('superagent')

const ProjectData = require('./projectData')


class ListProjects extends React.Component {

  componentDidMount(){
    const {dispatch} = this.props
    request.get('api/v1/projects',function(err,res,next){
      dispatch({type : 'LIST_PROJECTS', payload : res.body.projects})
    })
  }

  mapProjects(projects){
    return projects.map((project) =>{
      return(
        <tr>
          <td><Link to={`/projects/${project.project_id}`}>{project.project_number}</Link></td>
          <td>{project.project_name}</td>
        </tr>
      )
    })
  }

  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>Number:</th>
            <th>Name:</th>
          </tr>
        </thead>
        <tbody>
        {this.mapProjects(this.props.projects)}
        </tbody>
      </table>
    )
  }
}

module.exports = connect((state) => state)(ListProjects)
