const swaggerJsdoc = require("swagger-jsdoc");
const opt = {
	definition: {
		swagger: "2.0",
		info: {
			title: "IF Carona API",
			description: "API para a aplicação IF Carona",
			version: process.env.NODE_ENV,
		},
	},
	apis: ["**/*.controller.yaml"],
};

const docsConfiguration = swaggerJsdoc(opt);
module.exports = { docsConfiguration };
