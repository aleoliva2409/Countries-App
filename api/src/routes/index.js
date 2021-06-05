const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRouter = require('./countries.routes')
// const countriesId = require('../controllers/countriesId.controller')
// const searchCountries = require('../controllers/searchCountries.controller')
// const activities = require('../controllers/activities.controller')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries' , countriesRouter)
// router.use('/countries/:idPais' , countriesId)
// router.use('/countries' , searchCountries)
// router.use('/activity', activities)

module.exports = router;