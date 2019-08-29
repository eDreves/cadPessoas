'use strict'

const express = require('express')
const router  = express.Router()

router.use('/pessoas', require('./pessoas'))


module.exports = router