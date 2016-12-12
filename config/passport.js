const mongoose = require('mongoose')
const User = mongoose.model('User')
const facebook = require('./passport/facebook')

module.exports = (passport) => {
  // serialize and deserialize sessions
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => User.findOne({ _id: id }, done))

  passport.use(facebook)
}
