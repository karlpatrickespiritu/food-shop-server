const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.index = (req, res) => {
  User.load({}, (err, users) => {
    if (err) throw err
    res.json({ users })
  })
}

exports.create = (req, res) => {}

exports.show = (req, res) => {}

exports.update = (req, res) => {}

exports.delete = (req, res) => {}

