const CarroRepository = require("../repositories/carro/Carro.repository");

class CarroService {
	CarroRepository;
	constructor() {
		this.CarroRepository = new CarroRepository();
	}

	getMeusCarros = async (req, res) => {
		// const user = req.user
		const user = {};
		const meusCarros = await this.CarroRepository.getCarrosDoUsuario(1);
		res.json(meusCarros);
	};

	getCarroById = async (req, res) => {
		const carro = await this.CarroRepository.getCarroPorId(req.params.id);
		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}
		res.json(carro);
	};

	postCarro = async (req, res) => {
		const { modelo, placa, ano, cor } = req.body;

		let carro = { modelo, placa, ano, cor, fotos: [], criadoPor: 1 };
		carro = await this.CarroRepository.salvarCarro(carro);

		res.json(carro);
	};

	putCarro = async (req, res) => {
		const { modelo, ano, cor } = req.body;
		let carro = { modelo, ano, cor };

		carro = await this.CarroRepository.atualizarCarro(req.params.id, carro);

		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}

		res.json(carro);
	};

	deleteCarro = (req, res) => {
		const carro = this.CarroRepository.deleteCarroPorId(req.params.id);

		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}

		res.json(carro);
	};

	postImagem = (req, res) => {
		const { key, location: url = "" } = req.file;
		// Apenas uma foto por carro por limitações do mock
		const foto = {
			url,
			nomeImagem: key,
			ordem: 0,
		};
		let carro = this.CarroRepository.getCarroPorId(req.params.id);
		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}
		carro.fotos = [foto];
		res.json(this.CarroRepository.atualizarCarro(req.params.id, carro));
	};

	putImagem = (req, res) => {
		let carro = this.CarroRepository.getCarroPorId(req.params.id);
		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}
		//atualizar imagem, método ainda não implementado porque só é permitido uma foto até agora
		res.json(carro);
	};
	deleteImagem = (req, res) => {
		let carro = this.CarroRepository.getCarroPorId(req.params.id);
		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}
		const { nomeImagem } = req.body;
		const imageIndex = carro.fotos.findIndex(
			(f) => f.nomeImagem === nomeImagem
		);
		if (imageIndex < 0) {
			res.status(404).json({
				message: "Not found",
			});
		}
		carro.fotos.splice(imageIndex);
		res.json(
			res.json(this.CarroRepository.atualizarCarro(req.params.id, carro))
		);
	};
}

module.exports = new CarroService();
