const db = require("../../../database/models");

class CarroRepository {
	getCarrosDoUsuario = (user) => {
		return db.Carro.findAndCountAll({
			where: { criadoPor: user, deletedAt: null },
			include: { model: db.Foto, as: "fotos" },
		});
	};

	atualizarCarro = (id, carro) => {
		return db.Carro.update(carro, {
			where: { id, deletedAt: null },
			include: { model: db.Foto, as: "fotos" },
		});
	};

	deleteCarroPorId(id) {
		return db.Carro.update(
			{ deletedAt: db.sequelize.fn("NOW") },
			{ where: { id } }
		);
	}

	getCarroPorId(id) {
		return db.Carro.findByPk(id, {
			include: { model: db.Foto, as: "fotos" },
		});
	}

	async salvarCarro(carro) {
		const carroInstance = db.Carro.build(carro);

		try {
			await carroInstance.save();
		} catch (e) {
			console.log(e);
		}

		return carroInstance;
	}
}

module.exports = CarroRepository;
