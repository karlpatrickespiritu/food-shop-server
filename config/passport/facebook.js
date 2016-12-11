const FacebookStrategy = require('passport-facebook').Strategy
const config = require('../')

module.exports = new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL,
  profileFields: ['id', 'displayName', 'photos', 'email']
},
  (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    // console.log({
    //   name: profile.displayName,
    //   email: profile.emails[0].value,
    //   username: profile.username,
    //   provider: 'facebook',
    //   facebook: profile._json
    // })
  }
)
