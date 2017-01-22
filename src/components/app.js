const React = require('react')
const _ = require('lodash')
//components
const ListProjects = require('./listProjects')
const ProjectData = require('./projectData')
const Header = require('./header')


module.exports = function App (props) {
  console.log('app.js props', props)
  const {state, store} = props
  const {PPEGear, projects} = state
  const {project_id, project_number, project_name , important_Notices} = projects

//use object keys to map data
const projKeysArray = objectKeys(projects)

  return (
    <div className="row">
      <Header />
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
