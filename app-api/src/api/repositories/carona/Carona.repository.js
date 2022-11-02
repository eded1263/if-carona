const db = require("../../../database/models");

class CaronaRepository {
	getCaronasDisponiveis = (where = {}) => {
		return db.Carona.findAndCountAll({
			where: {
				deletedAt: null,
				dataCancelada: null,
				dataAceitada: null,
				...where,
			},
		});
	};

	deleteCaronaPorId(id) {
		return db.Carona.update(
			{ deletedAt: db.sequelize.fn("NOW") },
			{ where: { id } }
		);
	}

	atualizarCarona = (id, carona) => {
		return db.Carona.update(carona, { where: { id, deletedAt: null } });
	};

	getCaronaPorId(id, where) {
		return db.Carona.findOne({ where: { id, ...where } });
	}

	async criarCarona(carona) {
		const caronaInstance = db.Carona.build(carona);

		await caronaInstance.save();

		return caronaInstance;
	}
}

module.exports = CaronaRepository;
