const controller = require('./encoder.controller')

module.exports = function encoder (req, res) {
  if (!/^[a-zA-Z]+$/.test(req.body.input)) {
    return res.status(400).send('Bad request')
  }

  return res.send({ result: controller(req.body.input) })
}