const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRouter = require('./countries.routes')
const countriesIdRouter = require('./countriesId.routes')
const activityRouter = require('./activity.routes')
const activitiesRouter = require('./activities.routes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries' , countriesRouter)
router.use('/countries' , countriesIdRouter)
router.use('/activity', activityRouter)
router.use('/activity', activitiesRouter)

module.exports = router;