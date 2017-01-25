const debug = require('debug')('components:shop')
const React = require('react')
const _ = require('lodash')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { RaisedButton } = require('material-ui')

//components

module.exports = connect((state) => state)(Shop)

function Shop (props) {
  debug({props})
  const { products, total, dispatch} = props

  return (
    <div className="shop">
      <h1>SHOP</h1>
        <table>
          <thead>
            <tr>
              <th>ITEMS</th>
              <th>PRICE</th>
              <th>stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <p> Hello</p>
          </tbody>
        </table>
    </div>
  )
}
