const { Router } = require("express");
const router = Router();
const postActivity = require("../controllers/activity.controller");

router.post("/", postActivity);

module.exports = router;
