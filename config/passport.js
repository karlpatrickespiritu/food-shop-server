const facebook = require('./passport/facebook')

module.exports = (passport) => {
  passport.use(facebook)
}

