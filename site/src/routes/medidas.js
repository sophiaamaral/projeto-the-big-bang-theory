var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/Personagens/:idPersonagem", function (req, res) {
    medidaController.Personagens(req, res);
});

router.get("/Temporadas/:idTemporada", function (req, res) {
    medidaController.Temporadas(req, res);
});

module.exports = router;