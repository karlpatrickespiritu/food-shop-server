exports.facebook = (req, res) => {
  res.json({ 'msg': 'ok' })
}

exports.index = (req, res) => {
  const { email, password } = req
  res.json({ email, password })
}
