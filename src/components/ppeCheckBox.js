const React = require('react')
const { Link } = require('react-router').Link
const { connect } = require('react-redux')
const request = require('superagent')

class PpeCheckBox extends React.Component {
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
          <input type='checkbox' ref={`${ppeItem.ppe_id}`}>{ppeItem.ppe_name}</input>
          </td>
        </tr>
      )
    })
  }
  // <td>
  //   <img src={`${ppeItem.ppe_image}`} alt={`${ppeItem.ppe_name}`}/>
  // </td>

  render(){
    console.log('PpeCheckBox, ',this.props);
    const { PPEGear } = this.props
    return (
      <form>
      {this.mapPPE(PPEGear)}
      </form>
    )
  }
}

module.exports = connect((state) => state)(PpeCheckBox)
