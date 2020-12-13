const express = require('express')
const app = express()
const port = 3000

const authorization = require('./middleware/authorization')
const encoder = require('./encoder')
const login = require('./login')

app.use(express.json())

app.post('/encoder', authorization, encoder)
app.post('/login', login)

module.exports = app
