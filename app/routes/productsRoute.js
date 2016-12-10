const express = require('express')
const router = express.Router()
const products = require('../controllers/api/productsController')

router
  .get(products.index)
  .post(products.create)

// router.route('/products/:id')
//   .patch(products.update)
//   .delete(products.delete)

module.exports = router
