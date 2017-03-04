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
const ListProjects = require('./components/listProjects')
const ProjectData = require('./components/projectData')

const store = createStore(reducer, initialState)

const Root = ({store}) => {
  return (
    <MuiThemeProvider>
      <Provider store={store} >
        <Router history={hashHistory} >
          <Route path="/" component={App} store={store}>
            <IndexRoute component={ListProjects} />
            <Route path="/projects/:id" component={ProjectData} />
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
