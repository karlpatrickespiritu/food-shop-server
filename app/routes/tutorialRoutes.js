const express = require('express')
const router = express.Router()
const tutorial = require('../controllers/api/tutorialController')

router
  .get('/', tutorial.index)
  .post('/', tutorial.create)
  .patch('/:id', tutorial.update)
  .delete('/:id', tutorial.delete)

module.exports = router
