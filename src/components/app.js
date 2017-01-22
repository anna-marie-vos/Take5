const React = require('react')
const _ = require('lodash')
const ListProjects = require('./listProjects')
//components
const ProjectData = require('./projectData')



module.exports = function App (props) {
  console.log('app.js props', props)
  const {state, store} = props
  const {PPEGear, projects} = state
  const {project_id, project_number, project_name , important_Notices} = projects

//use object keys to map data
const projKeysArray = objectKeys(projects)

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
            {projKeysArray.map((id)=>
              <ListProjects projectData = {projects[id]}
              store = {store}/>)
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

function objectKeys(obj){
  const arr = Object.keys(obj)
    return arr.map(key =>{return Number(key)})
}
