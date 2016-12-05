const development = require('./env/development')
const staging = require('./env/staging')
const production = require('./env/production')

module.exports = {
  development: development,
  staging: staging,
  production: production,
}[process.env.NODE_ENV || 'development']