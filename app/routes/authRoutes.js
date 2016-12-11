const express = require('express')
const router = express.Router()
const auth = require('../controllers/api/authController')

router
  .get('/auth/facebook/callback', auth.index)

module.exports = router
