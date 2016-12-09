const mongoose = require('mongoose')
const FacebookStrategry = require('passport-facebook').Strategry
const config = require('../config')

module.exports = new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    console.log([accessToken, refreshToken, profile, done])
  }
)