const express = require('express')
const router = express.Router()
const userController = require('../controllers/api/userController')

router
  .get('/', userController.index)
  .post('/', userController.create)
  .patch('/:id', userController.update)
  .delete('/:id', userController.delete)

module.exports = router
