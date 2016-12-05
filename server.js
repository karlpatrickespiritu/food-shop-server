require('dotenv').config()

const config = require('./config')
// const express = require('express')
// const mongoose = require('mongoose')
const port = process.env.PORT || 3000

// const app = express()

console.log({
  config,
  port
})
