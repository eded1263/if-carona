require("./src/config/env");
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const authController = require("./src/controllers/auth.controller");
const passport = require("./src/middlewares/passport.middleware");
//Configuração dos middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authController.router);
app.use(passport.initialize());
//Exporta o aplicativo express configurado
module.exports = app;
