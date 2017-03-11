const React = require('react')
// const debug = require('debug')('components:listProjects')
const Link = require('react-router').Link
const { connect } = require('react-redux')
const request = require('superagent')


class NewProjectForm extends React.Component {
  componentDidMount(){
    const {dispatch} = this.props
    request.get('api/v1/ppe',function(err,res,next){
      dispatch({type : 'LIST_PPE', payload : res.body.ppe})
    })
  }

  mapPPE(ppe){
    return ppe.map((ppeItem) =>{
      return(
        <tr>
          <td>
            <input type='checkbox' ref={`${ppeItem.ppe_id}`}/> {ppeItem.ppe_name}
          </td>
          <td><img src={`${ppeItem.ppe_image}`}/>
          </td>
        </tr>
      )
    })
  }

  handleSubmit(){
    const {dispatch} = this.props
    const inputs = this.refs
    console.log('this.refs[1].value, ',this.refs[1].checked);
    console.log('this.refs[2].value, ',this.refs[2].checked);
    const projectInfo = {}
    const ppeGear = []
    
    projectInfo.project_number = this.refs.project_number
    projectInfo.project_name = this.refs.project_name
    projectInfo.location = this.refs.location
    projectInfo.SWMS = this.refs.SWMS
    projectInfo.important_Notices = this.refs.notices

  }


  render(){
    const { PPEGear } = this.props
    return (
      <form>
        <table>
        <thead>
        <tr><strong>Project Information:</strong></tr>
        </thead>
        <tbody>
            <tr>
              <td>Project Number: </td>
              <td><input type='text' ref='project_number' placeholder='Project Number'/></td>
            </tr>
            <tr>
              <td>Project Name: </td>
              <td><input type='text' ref='project_name' placeholder='Project Name'/></td>
            </tr>
            <tr>
              <td>Location: </td>
              <td><input type='text' ref='location' placeholder='Location'/></td>
            </tr>
            <tr>
              <td>SWMS: </td>
              <td><input type='text' ref='SWMS' placeholder='SWMS'/></td>
            </tr>
            <tr>
              <td>Notices: </td>
              <td><input type='text' ref='notices' placeholder='Notices'/></td>
            </tr>
            <tr><strong>PPE GEAR:</strong></tr>
            {this.mapPPE(PPEGear)}
            <tr className="button" onClick={this.handleSubmit.bind(this)} >
              Submit
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
}

module.exports = connect((state) => state)(NewProjectForm)
