const express = require('express')
const router = express.Router()
const products = require('./productsRoute')

router.use('/api/products', products)

module.exports = router
