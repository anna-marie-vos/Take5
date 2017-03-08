const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action) {
  const newState = clone(state)
  // console.log('reducer.js action.payload:', action.payload)

  switch(action.type){

    case 'LIST_PROJECTS':
      newState.projects = action.payload
      return newState


    default:
      return newState
  }
}
