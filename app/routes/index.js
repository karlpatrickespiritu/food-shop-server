const express = require('express')
const router = express.Router()
const tutorials = require('./tutorialRoutes')
const auth = require('./authRoutes')

router.use('/api/tutorials', tutorials)
router.use('/auth', auth)

module.exports = router
