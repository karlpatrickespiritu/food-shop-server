const FacebookStrategy = require('passport-facebook').Strategy
const config = require('../')

module.exports = new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL
},
  (accessToken, refreshToken, profile, done) => {
    console.log([accessToken, refreshToken, profile, done])
  }
)
