require('dotenv').config()

// const config = require('./config')
// const mongoose = require('mongoose')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const controllers = require('./app/controllers')

app.use(controllers)
app.use(express.static(`${__dirname}/public`))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
