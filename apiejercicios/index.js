const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let pass = "fWEvYvlDDIqH2qtm";
const ejerciciosRoutes = require("./routes/ejercicios-routes");
let mongoUrl = `
mongodb+srv://userp:${pass}@matematicas-qgwli.mongodb.net/test?retryWrites=true&w=majority
`;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/ejercicios", ejerciciosRoutes);
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Error Desconocido" });
});

mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
