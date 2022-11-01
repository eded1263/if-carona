const app = require("../../../../app");
const db = require("../../../database/models");
const supertest = require("supertest");

describe("Teste das rotas de Carro", () => {
	let thisDb = db;

	beforeAll(async () => {
		await thisDb.sequelize.sync({ force: true });
	});

	it("[POST] Criar Carro", async () => {
		const carro = {
			modelo: "Polo",
			ano: "2019",
			placa: "AAA1B23",
			cor: "Cinzinha",
		};

		const response = await supertest(app).post("/carro").send(carro);

		expect(response.status).toBe(200);
	});

	it("[GET] Listar Carros", async () => {
		const response = await supertest(app).get("/carro");

		expect(response.status).toBe(200);
	});

	it("[GET] Buscar umcarro por id", async () => {
		const response = await supertest(app).get("/carro/1");

		expect(response.status).toBe(200);
	});

	it("[PUT] Atualizar um carro", async () => {
		const carro = {
			modelo: "Polo",
			ano: "2019",
			cor: "Preto",
		};
		const response = await supertest(app).put("/carro/1").send(carro);

		expect(response.status).toBe(200);
	});

	it("[DELETE] Apagar um carro", async () => {
		const response = await supertest(app).delete("/carro/1");

		expect(response.status).toBe(200);
	});

	// TODO: Testar rotas de imagem de carro
});
