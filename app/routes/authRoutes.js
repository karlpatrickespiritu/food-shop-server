const express = require('express')
const passport = require('passport')
const router = express.Router()
const auth = require('../controllers/api/authController')

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
    (req, res) => {
      res.json({ 'msg': 'ok' })
    }
  )

module.exports = router
