const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const { docsConfiguration } = require("./src/config/docs");

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docsConfiguration));
//Configuração dos middlewares
app.use(cors());

//Configuração das rotas da API
app.get("/", (req, res) => {
	res.send("Express server");
	res.end();
});

app.get("/spec", (_req, res) => {
	res.send(docsConfiguration);
});

//Exporta o aplicativo express configurado
module.exports = app;
