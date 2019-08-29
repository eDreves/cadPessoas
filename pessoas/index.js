'use strict'

const express               = require('express')
const router                = express.Router()
const controller = require('../controllers/PessoaController')

router.post('/', controller.create)

router.delete('/:_id', controller.remove)


module.exports = router