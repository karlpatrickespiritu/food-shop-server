const express = require('express')
const router = express.Router()
const tutorialRoutes = require('./tutorialRoutes')
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')

router.use('/api/tutorials', tutorialRoutes)
router.use('/api/users', userRoutes)
router.use('/auth', authRoutes)

module.exports = router
