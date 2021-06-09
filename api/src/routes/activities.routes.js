const { Router } = require("express");
const router = Router();
const getActivities = require("../controllers/activities.controller")

router.get("/", getActivities)

module.exports = router
