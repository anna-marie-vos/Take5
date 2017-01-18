const React = require('react')
const _ = require('lodash')

//components
const ProductRow = require('./product-row')
const CartRow = require('./cart-row')

module.exports = function App (props) {
  console.log('app.js props', props)
  console.log('app.js state', props.store.getState())

  return (
    <div class="row">
      <header class="pageTitle">
        <h1 class="Title">
          Take5: Hazard Identification Checklist
        </h1>
        <nav class="row">
            <button class="button" href="#">New project</button>
            <button class="button" href="#">List all PPE gear</button>
        </nav>
      </header>
      <div class ="row">
        <h2>
          Notice Board
        </h2>
        <table>
          <thead>
            <tr>
              <th>Project Number</th>
              <th>Project Name</th>
              <th>Site Notifications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a class="link" href="#">Project Number</a></td>
              <td><a class="link" href="#">Project Name</a></td>
              <td>Important Notices</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}
