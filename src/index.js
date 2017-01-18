const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')

const Router = require('react-router').Router
const Route = require('react-router').Route
const Link = require('react-router').Link

// components
const App = require('./components/app')


//initialState
const initialState = {
  projects: [
    {project_id: 1,
      project_number:'122433',
      project_name: 'Aurecon Offices',
      location:'Level 8, 1 Willis street,',
      SWMS:'Not available at present',
      important_Notices:'No notices'
    },
    {project_id: 2,
      project_number:'345221',
      project_name: 'Chorus exchange',
      location:'wellington, 3 thorndon street',
      SWMS:'available, link required',
      important_Notices:'Only wooden ladders allowed on site'
    }
  ],
  PPEGear: [
    {ppe_id: 1,
      ppe_name: 'Safety Boots',
      ppe_image:'http://www.activesafety.co.nz/media/22445/bestboy-sfo5lu-1.jpg?width=500&heightratio=1&bgcolor=fff'
    },
    {ppe_id: 2,
      ppe_name: 'high vis yellow vest',
      ppe_image:'https://images-na.ssl-images-amazon.com/images/I/41TZhfvh-yL.jpg'
    }
  ]
}


const store = createStore(reducer, initialState)

// console.log('src/index.js store', store)
// console.log('src/index.js state', store.getState())

document.addEventListener('DOMContentLoaded', (e) => {

  store.subscribe(() => {
    const state = store.getState()
    console.log('src/index.js store.subscribe() state', state)
    render(state)
  })


  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App state={state} store={store} />,
      root
    )
  }

  render(store.getState())

})
