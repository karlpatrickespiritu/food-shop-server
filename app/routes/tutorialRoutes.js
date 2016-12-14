const express = require('express')
const router = express.Router()
const tutorialController = require('../controllers/api/tutorialController')

router
  .get('/', tutorialController.index)
  .post('/', tutorialController.create)
  .patch('/:id', tutorialController.update)
  .delete('/:id', tutorialController.delete)

module.exports = router
