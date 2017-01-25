// logging
const debug = require('debug')('index')
localStorage.debug = '*'

// modules
const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const { MuiThemeProvider } = require('material-ui/styles')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const reducer = require('./reducer')
const initialState = require('../state')

// top level components
const App = require('./components/app')
const Shop = require('./components/shop')
const Checkout = require('./components/checkout')

const store = createStore(reducer, initialState)


//initialState
// const initialState = {
//   projects: {},
//   PPEGear: {
//     1: {ppe_id: 1,
//       ppe_name: 'Safety Boots',
//       ppe_image:'http://www.activesafety.co.nz/media/22445/bestboy-sfo5lu-1.jpg?width=500&heightratio=1&bgcolor=fff'
//     },
//     2: {ppe_id: 2,
//       ppe_name: 'high vis yellow vest',
//       ppe_image:'https://images-na.ssl-images-amazon.com/images/I/41TZhfvh-yL.jpg'
//     }
//   },
//   specificProject: {},
//   clickedProject: false
// }


// destructuring in the arguments!!!!
const Root = ({store}) => {
  return (
    <MuiThemeProvider>
      <Provider store={store} >
        <Router history={hashHistory} >
          <Route path="/" component={App} store={store}>
            <IndexRoute component={Shop} />
            <Route path="checkout" component={Checkout} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
    ReactDOM.render(
      <Root store={store}/>,
      root
    )
})
