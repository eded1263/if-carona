const app = require("../../../../app");
const db = require("../../../database/models");
const supertest = require("supertest");

describe("Teste das rotas de Área Comum", () => {
	let thisDb = db;

	beforeAll(async () => {
		await thisDb.sequelize.sync({ force: true });
	});

	it("[POST] Criar Area Comum", async () => {
		const area = {
			nome: "Teste",
			latitude: "12.121",
			longitude: "-13.131",
		};

		const response = await supertest(app).post("/area-comum").send(area);

		expect(response.status).toBe(200);
	});

	it("[GET] Listar Areas comuns", async () => {
		const response = await supertest(app).get("/area-comum");

		expect(response.status).toBe(200);
	});

	it("[GET] Buscar uma área comum especifica", async () => {
		const response = await supertest(app).get("/area-comum/1");

		expect(response.status).toBe(200);
	});

	it("[PUT] Atualizar uma area comum", async () => {
		const area = {
			nome: "Teste",
			latitude: "12.121",
			longitude: "-13.131",
		};
		const response = await supertest(app).put("/area-comum/1").send(area);

		expect(response.status).toBe(200);
	});

	it("[DELETE] Apagar uma area comum", async () => {
		const response = await supertest(app).delete("/area-comum/1");

		expect(response.status).toBe(200);
	});
});
