
/**
 * Module dependencies.
 */

var express = require('express')
var session = require('express-session')
var compression = require('compression')
var morgan = require('morgan')
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var csrf = require('csurf')

var MongoStore = require('connect-mongo')(session)
var flash = require('connect-flash')
var winston = require('winston')
var helpers = require('view-helpers')
var config = require('./')
var pkg = require('../package.json')

var env = process.env.NODE_ENV || 'development'

/**
 * Expose
 */

module.exports = function (app, passport) {
  // Compression middleware (should be placed before express.static)
  app.use(compression({
    threshold: 512
  }))

  // Static files middleware
  app.use(express.static(config.root + '/public'))

  // Use winston on production
  var log = 'dev'
  if (env !== 'development') {
    log = {
      stream: {
        write: (message, encoding) => {
          winston.info(message)
        }
      }
    }
  }

  // Don't log during tests
  // Logging middleware
  if (env !== 'test') app.use(morgan(log))

  // bodyParser should be above methodOverride
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      const method = req.body._method
      delete req.body._method
      return method
    }
  }))

  // cookieParser should be above session
  app.use(cookieParser())
  app.use(cookieSession({ secret: 'secret' }))
  app.use(session({
    secret: pkg.name,
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      url: config.db,
      collection: 'sessions'
    })
  }))

  // use passport session
  app.use(passport.initialize())
  app.use(passport.session())

  // connect flash for flash messages - should be declared after sessions
  app.use(flash())

  // should be declared after session and flash
  app.use(helpers(pkg.name))

  // adds CSRF support
  if (process.env.NODE_ENV !== 'test') {
    app.use(csrf())

    // This could be moved to view-helpers :-)
    app.use((req, res, next) => {
      res.locals.csrf_token = req.csrfToken()
      next()
    })
  }
}