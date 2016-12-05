const express = require('express')
const router = express.Router()
const api = require('./api')

/**
 * For Restful requests
 */
router.use('/api', api)

module.exports = router

