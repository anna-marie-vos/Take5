const debug = require('debug')('components:app')
const _ = require('lodash')
// modules
const React = require('react')
const { connect } = require('react-redux')
//components
const ListProjects = require('./listProjects')
const ProjectData = require('./projectData')
const Header = require('./header')

const App = (props) => {
  debug({props})

  return (
    <div>
      <Header/>
      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)
