module.exports = {
  db: 'mongodb://127.0.0.1:27017',
  facebook: {
    clientID: process.env.FB_APP_ID || 'APP_ID',
    clientSecret: process.env.FB_APP_SECRET || 'SECRET',
    callbackURL: `http://localhost:${process.env.PORT}/auth/facebook/callback`
  },
  google: {
    clientID: 'APP_ID',
    clientSecret: 'SECRET',
    callbackURL: 'http://localhost:3001/auth/google/callback',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.google.com/m8/feeds'
    ]
  }
}
