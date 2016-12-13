const express = require('express')
const router = express.Router()
const user = require('../controllers/api/userController')

router
  .get('/', user.index)
  .post('/', user.create)
  .patch('/:id', user.update)
  .delete('/:id', user.delete)

module.exports = router
