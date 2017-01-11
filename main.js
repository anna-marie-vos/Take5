var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var apiRoute = require('./03-apiRoutes')

// view engine setup

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//export module
module.exports = appGenerator(db)

//app generator function
function appGenerator(db){
  var app = express()

  //if we're in development generate the app using this.
  if(app.get('env')==='development'){
    var webpackDevMiddleware = require('webpack-dev-middleware')
    var config = require('./webpack.config')
    var webpack = require('webpack')
    var compiler = webpack(config)
    var livereload = require('livereload')
    var lrserver = livereload.createServer()

    lrserver.watch([
      __dirname+"/public",
      __dirname+"/04-clientViews"
    ])

    app.use(require('inject-lr-script')())
    app.use(webpackDevMiddleware(compiler,{
      noInfo:true,
      publicPath:config.output.publickPath
    }))
  }
  // the static route
  app.use(express.static(path.join(__dirname, 'public')))

  // routes
  app.use('api/v1/Take5', api.Take5(db))

  //catch the 404 error
  app.use(function(req,res,next){
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  })
  //handling other errors
  //error handling during development
  if(app.get('env')==='development'){
    app.use(function(err,req,res,next){
      res.status(err.status ||500)
      res.json({
        message: err.message,
        error:{}
      })
    })
  }
  return app
}
