var knex = require('knex')
var setup = require('../knexfile')[process.env.NODE_ENV || 'development']

module.exports = knex(setup)
