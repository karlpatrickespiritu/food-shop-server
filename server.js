require('dotenv').config()

const config = require('./config')
const express = require('express');
const mongoose = require('mongoose');

const app = express();

console.log(config)
