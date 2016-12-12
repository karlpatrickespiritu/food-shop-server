const development = require('./env/development')
const staging = require('./env/staging')
const production = require('./env/production')
const path = require('path')
const extend = require('util')._extend
const defaults = {
  root: path.normalize(`${__dirname}/..`)
}

module.exports = {
  development: extend(development, defaults),
  staging: extend(staging, defaults),
  production: extend(production, defaults)
}[process.env.NODE_ENV || 'development']
