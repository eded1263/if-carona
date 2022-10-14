const AreaComumRepository = require("../repositories/area-comum/AreaComum.repository");

class CarroService {
	AreaComumRepository;
	constructor() {
		this.AreaComumRepository = new AreaComumRepository();
	}

	getAreasComum = async (req, res) => {
		const areasComuns = await this.AreaComumRepository.getAreasComuns();
		res.json(areasComuns);
	};

	getAreaComumById = async (req, res) => {
		const areaComum = await this.AreaComumRepository.getAreaComumPorId(
			req.params.id
		);
		if (!areaComum) {
			res.status(404).json({
				message: "Not found",
			});
		}
		res.json(areaComum);
	};

	postAreaComum = async (req, res) => {
		let areaComum = { ...req.body, fotos: [], criadoPor: 1 };
		areaComum = await this.AreaComumRepository.salvarAreaComum(areaComum);

		res.json(areaComum);
	};

	putAreaComum = async (req, res) => {
		const { nome } = req.body;
		let areaComum = { nome };

		areaComum = await this.AreaComumRepository.atualizarAreaComum(
			req.params.id,
			areaComum
		);

		if (!areaComum) {
			res.status(404).json({
				message: "Not found",
			});
		}

		res.json(areaComum);
	};

	deleteAreaComum = (req, res) => {
		const areaComum = this.AreaComumRepository.deleteAreaComumPorId(
			req.params.id
		);

		if (!areaComum) {
			res.status(404).json({
				message: "Not found",
			});
		}

		res.json(areaComum);
	};

	// Daqui para baixo status: TODO
	postImagem = (req, res) => {
		const { key, location: url = "" } = req.file;
		const foto = {
			url,
			nomeImagem: key,
			ordem: 0,
		};
	};

	putImagem = (req, res) => {};
	deleteImagem = (req, res) => {};
}

module.exports = new CarroService();
