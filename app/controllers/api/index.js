const express = require('express')
const router = express.Router()
const home = require('./home')
const products = require('./products')

router.use('/', home)
router.use('/products', products)

module.exports = router
