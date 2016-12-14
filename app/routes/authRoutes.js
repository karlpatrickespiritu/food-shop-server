const express = require('express')
const passport = require('passport')
const router = express.Router()
const userController = require('../controllers/api/userController')

router
  .post('/register', (req, res) => {
    console.log(req.body)
    res.json(req.body)
  })
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
    userController.index
  )

module.exports = router
