const { Router } = require('express')
const router = Router()
const getCountries = require('../controllers/countries.controller')

router.get('/' , getCountries)

module.exports = router