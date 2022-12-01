const CaronaRepository = require("../repositories/Carona/Carona.repository");

class CaronaService {
	constructor() {
		this.CaronaRepository = new CaronaRepository();
	}

	getCaronasDisponiveis = async (req, res) => {
		res.json(
			await this.CaronaRepository.getCaronasDisponiveis({
				areaComum: req.query.areaComum,
			})
		);
	};

	getCarona = async (req, res) => {
		res.json(await this.CaronaRepository.getCaronaPorId(req.params.id));
	};

	atualizarCarona = async (req, res) => {
		const carona = await this.CaronaRepository.getCaronaPorId(req.params.id, {
			criadoPor: req.user.id,
		});
		if (!carona) {
			res.status(404).json({ message: "Not found" });
		}

		await this.CaronaRepository.atualizarCarona(carona.id, {
			areaComum: req.params.areaComum,
		});

		res.json({ updated: true });
	};

	deleteCarona = async (req, res) => {
		const carona = await this.CaronaRepository.getCaronaPorId(req.params.id, {
			criadoPor: req.user.id,
		});
		if (!carona) {
			res.status(404).json({ message: "Not found" });
		}
		await this.CaronaRepository.deleteCaronaPorId(carona.id);
		res.json(carona);
	};

	postCarona = async (req, res) => {
		// TODO: verificar se o carro pertence ao usuario que fez a request, caso seja enviado na request
		// TODO: Caso seja enviado carro, adicionar dataOferecida
		let carona = { ...req.body, criadoPor: req.user.id };

		carona = await this.CaronaRepository.criarCarona(carona);

		res.json(carona);
	};

	aceitarCarona = async (req, res) => {
		const carona = await this.CaronaRepository.getCaronaPorId(req.params.id, {
			canceladoPor: null,
		});
		let caronaUpdt;
		if (carona.alunoCarona === 1) {
			res.status(400).json({ message: "Você é o aluno dessa carona" });
		}
		// TODO: confirmar se o carro pertence ao usuário
		if (req.body.carro) {
			caronaUpdt = {
				carro: req.body.carro,
				dataAceitada: Date.now(),
				aceitadoPor: req.user.id,
			};
		}
		if (req.body.alunoCarona) {
			caronaUpdt = {
				alunoCarona: req.body.alunoCarona,
				dataAceitada: Date.now(),
				aceitadoPor: req.user.id,
			};
		}
		await this.CaronaRepository.atualizarCarona(carona.id, caronaUpdt);

		res.json({ aceitado: true });
	};

	cancelarCarona = async (req, res) => {
		const carona = await this.CaronaRepository.getCaronaPorId(req.params.id);
		await this.CaronaRepository.atualizarCarona(carona.id, {
			dataCancelada: Date.now(),
			canceladoPor: req.user.id,
		});
	};
}

module.exports = new CaronaService();
