const React = require('react')
const _ = require('lodash')
const ListProjects = require('./listProjects')
//components



module.exports = function App (props) {
  console.log('app.js props', props)
  // console.log('app.js state', props.store.getState())
  const {state, store} = props
  const {PPEGear, projects} = state
  const {project_id, project_number, project_name , important_Notices} = projects

console.log('app.js projects: ',projects)

  return (
    <div className="row">
      <header className="pageTitle">
        <h1 className="Title">
          Take5: Hazard Identification Checklist
        </h1>
        <nav className="row">
            <button className="button" href="#">New project</button>
            <button className="button" href="#">List all PPE gear</button>
        </nav>
      </header>
      <div className ="row">
        <h2>
          Notice Board
        </h2>
        <table>
          <thead>
            <tr>
              <th>project number</th>
              <th>project name</th>
              <th>important Notices</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((projectData)=><ListProjects projectData = {projectData} store = {store}/>)}
          </tbody>
        </table>
      </div>

    </div>
  )
}
