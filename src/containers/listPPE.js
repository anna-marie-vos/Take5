const React = require('react')
const { Link } = require('react-router').Link
const { connect } = require('react-redux')
const request = require('superagent')

class ListPpe extends React.Component {

  render(){

    return (
      <div>
        Hello
      </div>
    )
  }
}

module.exports = connect((state) => state)(ListPpe)
