const debug = require('debug')('components:header')
const React = require('react')
const _ = require('lodash')
const {Link} = require('react-router')

module.exports = function header(props){
  debug({props})

  return (
      <header className="pageTitle">
        <h1 className="Title">
          Take5: Hazard Identification Checklist
        </h1>
        <nav className="row">
        <Link to="/" className="button">List Projects</Link>
          <Link to="/ppe" className="button">PPE gear List</Link>
          <Link to="/newProject" className="button" href="#">New project</Link>
          <button className="button" href="#">Edit Project</button>
          <button className="button" href="#">Project Hazard Log</button>
          <button className="button" href="#">Delete Project</button>
        </nav>
      </header>
  )
}
