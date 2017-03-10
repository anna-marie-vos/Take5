const React = require('react')
const { Link } = require('react-router').Link
const { connect } = require('react-redux')
const request = require('superagent')

class ListProjectPpe extends React.Component {

  mapProjectPpe(ppe){
    return ppe.map((ppeItem) =>{
      return(
          <p><strong>{ppeItem.ppe_name}: </strong>
            <img src={`${ppeItem.ppe_image}`} alt={`${ppeItem.ppe_name}`}/>
          </p>
      )
    })
  }

  render(){
    const { ppe } = this.props
    return (
      <div>
        {this.mapProjectPpe(ppe)}
      </div>
    )
  }
}

module.exports = connect((state) => state)(ListProjectPpe)
