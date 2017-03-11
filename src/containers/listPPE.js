const React = require('react')
const { Link } = require('react-router').Link
const { connect } = require('react-redux')
const request = require('superagent')

class ListPpe extends React.Component {

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
          <td>{ppeItem.ppe_name}:</td>
          <td>
            <img src={`${ppeItem.ppe_image}`} alt={`${ppeItem.ppe_name}`}/>
          </td>
        </tr>
      )
    })
  }

  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Image:</th>
          </tr>
        </thead>
        <tbody>
        {this.mapPPE(this.props.PPEGear)}
        </tbody>
      </table>
    )
  }
}

module.exports = connect((state) => state)(ListPpe)
