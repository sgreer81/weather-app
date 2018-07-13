const router = require('express').Router()

const current = require('./current')

router.use('/', current)

module.exports = router
