const CarroRepository = require("../repositories/carro/Carro.repository");
const FotoRepository = require("../repositories/foto/Foto.repository");

class CarroService {
	CarroRepository;
	FotoRepository;
	constructor() {
		this.CarroRepository = new CarroRepository();
		this.FotoRepository = new FotoRepository();
	}

	getMeusCarros = async (req, res) => {
		const meusCarros = await this.CarroRepository.getCarrosDoUsuario(
			req.user.id
		);
		res.json(meusCarros);
	};

	getCarroById = async (req, res) => {
		const carro = await this.CarroRepository.getCarroPorId(req.params.id);
		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
			return;
		}
		res.json(carro);
	};

	postCarro = async (req, res) => {
		const { modelo, placa, ano, cor } = req.body;

		let carro = { modelo, placa, ano, cor, fotos: [], criadoPor: req.user.id };
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

	// Daqui para baixo status: TODO
	postImagem = async (req, res) => {
		const { key, location } = req.file;
		let url = location;
		if (!url) {
			url = `${process.env.APP_BASE_URL}/files/${key}`;
		}

		let carro = await this.CarroRepository.getCarroPorId(req.params.id);
		if (!carro) {
			res.status(404).json({
				message: "Not found",
			});
		}
		await this.FotoRepository.deletarImagens({ carroId: carro.id });
		const foto = {
			url,
			nomeImagem: key,
			ordem: 0,
			carroId: carro.id,
		};
		res.json(this.FotoRepository.adicionarImagem(foto));
	};
}

module.exports = new CarroService();
