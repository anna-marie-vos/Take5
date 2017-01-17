const React = require('react')


module.exports = function (props) {
  const { state, store } = props
  console.log('CounterApp', state, store)

  const incrementAction = { type: 'INCREMENT' }

  return (
    <div>
      <div>{state}</div>
      <button 
        onClick={() => store.dispatch(incrementAction)}>
          Increment
      </button>
      <button
        onClick={() => store.dispatch({type: 'DECREMENT'})}>
        Decrement
      </button>
    </div>
  )
}
