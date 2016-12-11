const express = require('express')
const router = express.Router()
const tutorials = require('./tutorialRoutes')

router.use('/api/tutorials', tutorials)

module.exports = router
