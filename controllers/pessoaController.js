'use strict'

const debug            = require('debug')('node_api:PublicationController')
const PessoaModel = require('../models/pessoaModel.js')


module.exports = {
  getAll: (request, response, next) => {
    PessoaModel.find({ deleted_at: "" }, (err, data) => {
      if(err)
        return next(err)
		    
        response.json(data.reverse())
    })
  },

  create: (request, response, next) => {
    const {body} = request

    PessoaModel.create(body, (err, data) => {
      if(err)
        return next(err)

      response.json(data)
    })
  },

  remove: (request, response, next) => {
    const {_id} = request.params

    PessoaModel.remove(_id, (err, data) => {
      if(err)
        return next(err)
		
      response.json(data)
    })
  }
}