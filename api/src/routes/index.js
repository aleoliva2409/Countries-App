const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRouter = require('./countries.routes')
const countriesIdRouter = require('./countriesId.routes')
const activities = require('../controllers/activities.controller')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries' , countriesRouter)
router.use('/countries' , countriesIdRouter)
router.use('/activity', activities)

module.exports = router;