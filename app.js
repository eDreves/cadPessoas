
'use strict'

const express    = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const app        = express()



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 3001))

app.use('/', require('./routes'))

module.exports = app