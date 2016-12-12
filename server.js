'use strict'

require('dotenv').config()

const fs = require('fs')
const join = require('path').join
const config = require('./config')
const mongoose = require('mongoose')
const express = require('express')
const passport = require('passport')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./app/routes')
const models = join(__dirname, 'app/models')

// Bootstrap models
fs.readdirSync(join(models))
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(models, file)))

require('./config/passport')(passport)
require('./config/express')(app, passport)
app.use(routes)

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen)

function listen () {
  if (app.get('env') === 'test') return
  app.listen(port)
  console.log('Express app started on port ' + port)
}

function connect () {
  const options = { server: { socketOptions: { keepAlive: 1 } } }
  return mongoose.connect(config.db, options).connection
}
