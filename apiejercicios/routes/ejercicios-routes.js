const express = require("express");
const router = express.Router();
const ejerciciosControllers = require("../controllers/ejercicios-controllers");
//Las rutas mas generales van al final
router.get("/", ejerciciosControllers.getInformacionAdicional);
router.get("/:materia", ejerciciosControllers.getEjerciciosPorParams);
module.exports = router;
