const express = require('express')
const router = express.Router()
const tutorials = require('./tutorialRoutes')
const users = require('./userRoutes')
const auth = require('./authRoutes')

router.use('/api/tutorials', tutorials)
router.use('/api/users', users)
router.use('/auth', auth)

module.exports = router
