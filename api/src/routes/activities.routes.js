const { Router } = require("express");
const router = Router();
const postActivity = require("../controllers/countries.controller");

router.post("/", postActivity);

module.exports = router;
