const React = require('react')
const _ = require('lodash')

module.exports = function header(props){
  return (
      <header className="pageTitle">
        <h1 className="Title">
          Take5: Hazard Identification Checklist
        </h1>
        <nav className="row">
            <button className="button" href="#">New project</button>
            <button className="button" href="#">List all PPE gear</button>
        </nav>
      </header>
  )
}
