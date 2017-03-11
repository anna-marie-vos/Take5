const test = require('ava')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('Test1: LIST_PROJECTS updates state.projects = {}', (t) => {
t.plan(1)
 // arrange
   const state = {
     projects: [],
     PPEGear: {},
     currentProject: {ppe:[],
       project:{ }
     },
     clickedProject: false
   }
   freeze(state)

  const body = [
    { project_id: 1, project_number: 122433, project_name: 'Aurecon Offices'},
    { project_id: 2, project_number: 345221, project_name: 'Chorus exchange' },
    { project_id: 3, project_number: 253423, project_name: 'GCNZ' }
  ]

  const action = {type: 'LIST_PROJECTS', payload: body }
   //act

  const newState = reducer(state, action)
  // console.log('test1 newstate, ', newState);
   //Assert
   t.deepEqual(newState.projects, body,'test 1 updates projects')
})

test('Test2: CURRENT_PROJECT updates state.currentProject: {ppe:[],project:{}},', (t) => {
t.plan(1)
 // arrange
   const state = {
     projects: [],
     PPEGear: {},
     currentProject: {ppe:[],
       project:{ }
     },
     clickedProject: false
   }
    freeze(state)

  const expected = {
    project: { project_id: 2,
     project_number: 345221,
     project_name: 'Chorus exchange',
     location: 'wellington, 3 thorndon street',
     SWMS: 'available, link required',
     important_Notices: 'Only wooden ladders allowed on site' },
  ppe: [ { ppe_id: 1,
       ppe_name: 'Safety Boots',
       ppe_image: 'http://s7g3.scene7.com/is/image//ae235?src=ae235/59707_P&$prodImageMedium$' },
     { ppe_id: 2,
       ppe_name: 'high vis yellow vest',
       ppe_image: 'https://images-na.ssl-images-amazon.com/images/I/41TZhfvh-yL.jpg' },
     { ppe_id: 3,
       ppe_name: 'hard hat',
       ppe_image: 'http://multimedia.3m.com/mws/media/794051J/3mtm-hard-hat-vented-white-4-point-ratchet-suspension-h-701v.jpg' }
     ]
   }

  const action = {type: 'LIST_PROJECTS', payload: expected }
   //act

  const newState = reducer(state, action)
  // console.log('test2 newstate, ', newState);
   //Assert
   t.deepEqual(newState.projects, expected,'test2 updates currentProject')
})
