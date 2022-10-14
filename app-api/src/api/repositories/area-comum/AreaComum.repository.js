const db = require("../../../database/models");

class AreaComumRepository {
	getAreasComuns = () => {
		return db.AreaComum.findAndCountAll({
			where: { deletedAt: null },
		});
	};

	atualizarAreaComum = (id, areaComum) => {
		return db.AreaComum.update(areaComum, { where: { id, deletedAt: null } });
	};

	deleteAreaComumPorId(id) {
		return db.AreaComum.update(
			{ deletedAt: db.sequelize.fn("NOW") },
			{ where: { id } }
		);
	}

	getAreaComumPorId(id) {
		return db.AreaComum.findByPk(id);
	}

	async salvarAreaComum(areaComum) {
		const areaComumInstance = db.AreaComum.build(areaComum);

		await areaComumInstance.save();

		return areaComumInstance;
	}
}

module.exports = AreaComumRepository;
