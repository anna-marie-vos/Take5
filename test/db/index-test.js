const test = require('ava')
const seedProjects = require('../../db/seed-projects')

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
const indexTable = 'projects_ppe'

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
      ppe_image:"http://www.activesafety.co.nz/media/22445/bestboy-sfo5lu-1.jpg?width=500&heightratio=1&bgcolor=fff"
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
      ppe_image:"http://www.activesafety.co.nz/media/22445/bestboy-sfo5lu-1.jpg?width=500&heightratio=1&bgcolor=fff"
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
      ppe_image:"http://www.activesafety.co.nz/media/22445/bestboy-sfo5lu-1.jpg?width=500&heightratio=1&bgcolor=fff"
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
   return db.getProjectAndPPEData(indexTable)
   .then(function(data){
     //Assert
     t.deepEqual(data,expected,'test 2 get data from 2 tables and sends only the data from 1 id')
   })
})
