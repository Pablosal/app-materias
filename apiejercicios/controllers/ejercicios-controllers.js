const HttpError = require("../models/http-error");

const getEjerciciosPorParams = (req, res, next) => {
  const materia = req.params.materia;
  let materia_exercise;
  if (!materia_exercise) {
    throw new HttpError("No se pudo encontrar una materia para este id", 404);
  }
};
const getInformacionAdicional = (req, res, next) => {};
module.exports = {
  getEjerciciosPorParams,
  getInformacionAdicional,
};
