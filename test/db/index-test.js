const test = require('ava')
// const seedProjects = require('../../db/seed-projects')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)

//migrate the latest database tables
test.beforeEach(() => {
  console.log('migrating....')
  return testKnex.migrate.latest()
    .then(() => {
      console.log('seeds....')
      return testKnex.seed.run()
    })
})

//rollback to the original state of the database
test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})


test('Test1: returns all the data in a table', (t) => {
 t.plan(1)
 // arrange
const tableName1 = 'projects'

const expected = [
  {project_id: 1,
      project_number:122433,
      project_name: 'Aurecon Offices',
      location:'Level 8, 1 Willis street,',
      SWMS:'Not available at present',
      important_Notices:''
    },
    {project_id: 2,
          project_number:345221,
          project_name: 'Chorus exchange',
          location:'wellington, 3 thorndon street',
          SWMS:'available, link required',
          important_Notices:'Only wooden ladders allowed on site'
    },
    {project_id: 3,
          project_number:253423,
          project_name: 'GCNZ',
          location:'Christchurch central',
          SWMS:'Available',
          important_Notices:'no personnel allowed on level 2 & 3'
    }
  ]
 //act
   return db.getTableData(tableName1)
   .then(function(data){
     //Assert
     t.deepEqual(data,expected,'test 1 get data from table')
   })
})

test('Test2: returns ppegear and projects joined data', (t) => {
 t.plan(1)
 // arrange

const expected = [
    {Proj_ppe_id:1,
      proj_id:"1",
      ppeGear_id:"1",
      project_id:1,
      project_number:122433,
      project_name:"Aurecon Offices",
      location:"Level 8, 1 Willis street,",
      SWMS:"Not available at present",
      important_Notices:"",
      ppe_id:1,
      ppe_name:"Safety Boots",
      ppe_image:"http://s7g3.scene7.com/is/image//ae235?src=ae235/59707_P&$prodImageMedium$"
    },
    {Proj_ppe_id:2,
      proj_id:"2",
      ppeGear_id:"1",
      project_id:2,
      project_number:345221,
      project_name:"Chorus exchange",
      location:"wellington, 3 thorndon street",
      SWMS:"available, link required",
      important_Notices:"Only wooden ladders allowed on site",
      ppe_id:1,
      ppe_name:"Safety Boots",
      ppe_image:"http://s7g3.scene7.com/is/image//ae235?src=ae235/59707_P&$prodImageMedium$"
    },
    {Proj_ppe_id:3,
      proj_id:"3",
      ppeGear_id:"1",
      project_id:3,
      project_number:253423,
      project_name:"GCNZ",
      location:"Christchurch central",
      SWMS:"Available",
      important_Notices:"no personnel allowed on level 2 & 3",
      ppe_id:1,
      ppe_name:"Safety Boots",
      ppe_image:"http://s7g3.scene7.com/is/image//ae235?src=ae235/59707_P&$prodImageMedium$"
    },
    {Proj_ppe_id:4,
      proj_id:"2",
      ppeGear_id:"2",
      project_id:2,
      project_number:345221,
      project_name:"Chorus exchange",
      location:"wellington, 3 thorndon street",
      SWMS:"available, link required",
      important_Notices:"Only wooden ladders allowed on site",
      ppe_id:2,
      ppe_name:"high vis yellow vest",
      ppe_image:"https://images-na.ssl-images-amazon.com/images/I/41TZhfvh-yL.jpg"
    },
    {Proj_ppe_id:5,
      proj_id:"2",
      ppeGear_id:"3",
      project_id:2,
      project_number:345221,
      project_name:"Chorus exchange",
      location:"wellington, 3 thorndon street",
      SWMS:"available, link required",
      important_Notices:"Only wooden ladders allowed on site",
      ppe_id:3,
      ppe_name:"hard hat",
      ppe_image:"http://multimedia.3m.com/mws/media/794051J/3mtm-hard-hat-vented-white-4-point-ratchet-suspension-h-701v.jpg"
    },
    {Proj_ppe_id:6,
      proj_id:"3",
      ppeGear_id:"4",
      project_id:3,
      project_number:253423,
      project_name:"GCNZ",
      location:"Christchurch central",
      SWMS:"Available",
      important_Notices:"no personnel allowed on level 2 & 3",
      ppe_id:4,
      ppe_name:"eye protection",
      ppe_image:"http://v2.glacialblog.com/userfiles/55/image/Eye%20Protection%20blog.jpg"
    },
    {Proj_ppe_id:7,
      proj_id:"3",
      ppeGear_id:"5",
      project_id:3,
      project_number:253423,
      project_name:"GCNZ",
      location:"Christchurch central",
      SWMS:"Available",
      important_Notices:"no personnel allowed on level 2 & 3",
      ppe_id:5,
      ppe_name:"ear protection",
      ppe_image:"http://img.directindustry.com/images_di/photo-g/60721-2451487.jpg"
    }
  ]

 //act
   return db.getProjectAndPPEData()
   .then(function(data){
     //Assert
     t.deepEqual(data,expected,'test 2 get data from 2 tables and sends only the data from 1 id')
   })
})

test('Test3: returns only the proj name, id, number of all projects', (t) => {
 t.plan(1)
 // arrange
  const expected = [
    { project_id: 1, project_number: 122433, project_name: 'Aurecon Offices'},
    { project_id: 2, project_number: 345221, project_name: 'Chorus exchange' },
    { project_id: 3, project_number: 253423, project_name: 'GCNZ' }
  ]
 //act
   return db.getAllProjects()
   .then(function(data){
    //  console.log('getAllProjects, ', data);
     //Assert
     t.deepEqual(data, expected,'test 3 get proj name, id, number of all projects')
   })
})

test('Test4: returns project info and PPE by id', (t) => {
 t.plan(1)
 // arrange
 const id = '2'
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

 //act
  return db.getProjectAndPpeById(id)
   .then(function(data){
    //  console.log('getProjectAndPpeById, ', data);
     //Assert
     t.deepEqual(data, expected,'test 4 get proj name, id, number of all projects')
   })
})

test('Test5: returns all ppeGear', (t) => {
 t.plan(1)
 // arrange
  const expected = [
    { ppe_id: 1,
      ppe_name: 'Safety Boots',
      ppe_image: 'http://s7g3.scene7.com/is/image//ae235?src=ae235/59707_P&$prodImageMedium$' },
    { ppe_id: 2,
      ppe_name: 'high vis yellow vest',
      ppe_image: 'https://images-na.ssl-images-amazon.com/images/I/41TZhfvh-yL.jpg' },
    { ppe_id: 3,
      ppe_name: 'hard hat',
      ppe_image: 'http://multimedia.3m.com/mws/media/794051J/3mtm-hard-hat-vented-white-4-point-ratchet-suspension-h-701v.jpg' },
    { ppe_id: 4,
      ppe_name: 'eye protection',
      ppe_image: 'http://v2.glacialblog.com/userfiles/55/image/Eye%20Protection%20blog.jpg' },
    { ppe_id: 5,
      ppe_name: 'ear protection',
      ppe_image: 'http://img.directindustry.com/images_di/photo-g/60721-2451487.jpg'
    }
  ]
 //act
   return db.getTableData('ppeGear')
   .then(function(data){
    //  console.log('getTableData ppegear, ', data);
     //Assert
     t.deepEqual(data, expected,'test 5 gets all ppegear')
   })
})
