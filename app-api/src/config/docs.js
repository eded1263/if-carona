const swaggerJsdoc = require("swagger-jsdoc");
const opt = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "IF Carona API",
			description: "API para a aplicação IF Carona",
			version: process.env.NODE_ENV,
		},
	},
	apis: ["**/*.controller.yaml", "**/*.scheme.yaml"],
};

const docsConfiguration = swaggerJsdoc(opt);
module.exports = { docsConfiguration };
