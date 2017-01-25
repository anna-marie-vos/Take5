const debug = require('debug')('components:app')
const _ = require('lodash')
// modules
const React = require('react')
const { connect } = require('react-redux')
const { AppBar } = require('material-ui')
//components
const ListProjects = require('./listProjects')
const ProjectData = require('./projectData')
const Header = require('./header')

const App = (props) => {
  debug({props})
  console.log('app.js props:',props)

  return (
    <div>
      <AppBar title="My Shop" />
      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)

// module.exports = function App (props) {
//   // console.log('app.js props', props)
//   const {state, store} = props
//   const {PPEGear, projects,specificProject} = state
//   const {project_id, project_number, project_name , important_Notices} = projects
//
// //use object keys to map data
// const projKeysArray = objectKeys(projects)
//
// // add the string 'details' to the array to insert details into the table
// projKeysArray.splice(specificProject.project_id,0,'details')
//
//   return (
//     <div className="row">
//       <Header />
//       <div className ="row">
//         <h2>
//           Notice Board
//         </h2>
//         <table>
//           <thead>
//             <tr>
//               <th>project number</th>
//               <th>project name</th>
//               <th>important Notices</th>
//             </tr>
//           </thead>
//           <tbody>
//             {projKeysArray.map((id,index)=>{
//               if(id === 'details'&& index != 0){
//                 return (
//                   <ProjectData data = {specificProject} />
//                 )
//               } else if(id === 'details'&& index === 0){
//                 return
//               }
//               else{
//                 return (<ListProjects projectData = {projects[id]}
//                 store = {store}/>)
//               }
//             })
//           }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }
//
// //object keys mapping function
// function objectKeys(obj){
//   const arr = Object.keys(obj)
//     return arr.map(key =>{return Number(key)})
// }
