const mongoose = require("mongoose");

const productEjercicio = new mongoose.Schema({
  descripcion: { type: String, required: True },
  soluciones: { type: [Number], required: true },
  respuestaCorrecta: { type: String, required: true },
  pistas: { type: [String], required: true },
});

module.exports = mongoose.model("Ejercicios", productEjercicio);
