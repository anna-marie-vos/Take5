var express = require('express')
var expresshbs = require('express-handlebars')
var path = require('path')
var bodyParser = require('body-parser')
var fs = require('fs')
var routes = require('./routes')
var app = express()

// view engine setup
app.engine('handlebars', expresshbs({defaultLayout: 'main'})) // makes the main page html file work.
app.set('view engine', 'handlebars') //causes the render function to work

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
// stuff above are all setup type things

app.get('/',routes.getProjects);
app.get('/index', routes.getProjects);
app.get('/index/:id', routes.getProjectData);
app.get('/index/:id/hazard_log', routes.getProjectHazardLog);
app.get('/index/:id/editProject',routes.getProjectEditForm);
app.post('/index/',routes.editProjectData);
app.get('/newProject', routes.getNewProjectForm);

module.exports = app
