const express = require('express')
const passport = require('passport')
const router = express.Router()
const auth = require('../controllers/api/authController')
const user = require('../controllers/api/userController')

router
  .get('/login', auth.index)
  .get(
    '/facebook', 
    passport.authenticate('facebook', {
      scope: ['email', 'user_about_me'],
      failureRedirect: '/login'
    })
  )
  .get(
    '/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/auth/login'
    }),
    user.index
  )

module.exports = router
