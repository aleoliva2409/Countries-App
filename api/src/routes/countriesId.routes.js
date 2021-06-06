const { Router } = require("express");
const router = Router();
const getCountry = require("../controllers/countriesId.controller");

router.get("/:idCountry", getCountry);

module.exports = router;