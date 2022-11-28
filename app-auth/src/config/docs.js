const swaggerJsdoc = require("swagger-jsdoc");
const opt = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "IF Carona API - Auth",
			description: "API para a autenticação no app IF Carona",
			version: process.env.NODE_ENV,
		},
	},
	apis: ["**/*.controller.yaml"],
};

const docsConfiguration = swaggerJsdoc(opt);
module.exports = { docsConfiguration };
