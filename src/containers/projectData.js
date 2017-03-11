const React = require('react')
const request = require('superagent')
const { connect } = require('react-redux')
const ProjectInfo = require('../components/projectInfo')

class ProjectData extends React.Component {

  componentDidMount(){
    // console.log('projectData, ',this.props);
    const dispatch = this.props.dispatch
    const project_id = this.props.params.id
    request.get(`api/v1/projects/${project_id}`)
    .end((err,res)=>{
      if (err) return console.log('error', err)
      dispatch({type:'CURRENT_PROJECT', payload:res.body})
    })
  }

  render(){
    const { currentProject } = this.props
    const { ppe , project } = currentProject
    // console.log('project, ',project);
    return (
      <ProjectInfo ppe={ppe} project={project}/>
    )
  }
}
module.exports = connect((state) => state)(ProjectData)
