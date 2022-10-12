const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const { docsConfiguration } = require("./src/config/docs");
const path = require("path");
const app = express();
const morgan = require("morgan");
const carroController = require("./src/api/controllers/carro/carro.controller");
const alunoController = require("./src/api/controllers/aluno/aluno.controller");
const bodyParser = require("body-parser");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docsConfiguration));
//Configuração dos middlewares
app.use(cors());

app.use(morgan("tiny"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Configuração das rotas da API
app.use(carroController.router);
app.use(alunoController.router);

// middleware
app.use("/files", express.static(path.resolve(__dirname, "tmp", "uploads")));

app.get("/spec", (_req, res) => {
	res.send(docsConfiguration);
});

//Exporta o aplicativo express configurado
module.exports = app;
