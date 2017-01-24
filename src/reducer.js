const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action) {
  const newState = clone(state)
  // console.log('reducer.js action.payload:', action.payload)

  switch(action.type){

    case 'UPDATE_PROJECTS_INFO':
      newState.projects = idAssigner(action.payload.data)
      return newState

    case 'PROJECT_DETAILS':
      const projId = action.payload
      if(newState.clickedProject===true){
        newState.clickedProject = false
        newState.specificProject ={}
      } else{
        newState.clickedProject = true
        newState.specificProject = state.projects[projId]
      }
      return newState

    case 'NEXT_SWITCH_HERE':
      return newState

    default:
      return newState
  }
}

function idAssigner(arrOfObjects){
  const obj = {}
    arrOfObjects.map(oneObject =>{
      obj[oneObject.project_id]= oneObject
    })
  return obj
}
