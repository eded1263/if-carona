const { Router } = require("express");
const CarroRepository = require("../../repositories/carro/Carro.repository");

class CarroController {
	router;
	CarroRepository;

	constructor() {
		this.router = Router();
		this.CarroRepository = new CarroRepository();
		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get("/carro", this.getMeusCarros);
		this.router.post("/carro", this.postCarro);
		this.router.get("/carro/:id", this.getCarroById);
		this.router.put("/carro/:id", this.putCarro);
		this.router.delete("/carro/:id", this.deleteCarro);
		this.router.post(
			"/carro/:id/imagem",
			multer(multerConfig).single("file"),
			this.postImagem
		);
		this.router.put("/carro/:id/imagem", this.putImagem);
		this.router.delete("/carro/:id/imagem", this.deleteImagem);
	}

	getMeusCarros(req, res) {
		// const user = req.user
		const user = {};
		const meusCarros = this.CarroRepository.getMeusCarros(user);
		res.json(meusCarros);
	}

	getCarroById(req, res) {
		const carro = this.CarroRepository.getCarroPorId(req.params.id);
		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}
		res.json(carro);
	}

	postCarro(req, res) {
		const { modelo, placa, ano, cor } = req.body;
		let carro = { modelo, placa, ano, cor };

		carro = this.CarroRepository.salvarCarro(carro);

		res.json(carro);
	}

	putCarro(req, res) {
		const { modelo, ano, cor } = req.body;
		let carro = { modelo, ano, cor };

		carro = this.CarroRepository.atualizarCarro(req.params.id, carro);

		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}

		res.json(carro);
	}

	deleteCarro(req, res) {
		const carro = this.CarroRepository.deleteCarroPorId(req.params.id);

		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}

		res.json(carro);
	}

	postImagem(req, res) {
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
	}

	putImagem(req, res) {
		let carro = this.CarroRepository.getCarroPorId(req.params.id);
		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}
		//atualizar imagem, método ainda não implementado porque só é permitido uma foto até agora
		res.json(carro);
	}
	deleteImagem(req, res) {
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
	}
}

module.exports = new CarroController();
