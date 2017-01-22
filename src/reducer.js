const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action) {
  const newState = clone(state)
  console.log('reducer.js action:', action)
  //write switch here

  return newState

}
