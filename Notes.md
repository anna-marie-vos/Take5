Notes of things to resolve:

1) In the package.json what does:  "dev":"node-dev ./bin/www", do??

2) I did not install, is that bad?:

"cookie-parser": "~1.3.5",

"morgan": "~1.6.1",

3) what does webpack.config.js do? where should I get that from?

4) in the main.js files (in json cats this is the app.js file.)
why do you have:

const express = require('express') and then
const app = express() in the module.exports.

5) what does this do? app.use(express.static(path.join(__dirname, 'public')))

6) in the server/www page why do we now require the following:

const knex = require('../db/knex') // knex instance
const db = require('../db')(knex) // db methods
const app = require('../app')(db) // app
