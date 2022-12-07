const app = require("../../../../app");
const db = require("../../../database/models");
const supertest = require("supertest");

describe("Teste das rotas de aluno", () => {
	let thisDb = db;
	beforeAll(async () => {
		await thisDb.sequelize.sync({ force: true });
	});

	it("[GET] Listagem de alunos", async () => {
		const response = await supertest(app).get("/admin/user");

		expect(response.status).toBe(200);
	});

	it("[GET] Retornar perfil do aluno", async () => {
		const response = await supertest(app).get("/user");

		expect(response.status).toBe(200);
	});

	it("[GET] Retornar perfil de um aluno específico", async () => {
		const response = await supertest(app).get("/user/1");

		expect(response.status).toBe(200);
	});

	it("[PUT] Atualizar perfil do aluno", async () => {
		const putAluno = {
			RA: "12345678",
			cpf: "12345678",
			nome: "Teste",
		};
		const response = await supertest(app).put("/admin/user/1").send(putAluno);

		expect(response.status).toBe(200);
	});

	it("[PUT] Atualizar perfil ", async () => {
		const putAluno = {
			nome: "Testesssss",
		};
		const response = await supertest(app).put("/user").send(putAluno);

		expect(response.status).toBe(200);
	});

	it("[DELETE] Apagar um perfil ", async () => {
		const response = await supertest(app).delete("/admin/user/1");

		expect(response.status).toBe(200);
	});
});
