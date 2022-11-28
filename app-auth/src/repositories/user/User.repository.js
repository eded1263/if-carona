const db = require("../../database/models");

class UserRepository {
	getUsers = (where = {}) => {
		return db.User.findAndCountAll({
			where: { deletedAt: null, ...where },
		});
	};

	atualizarUser = (id, user) => {
		return db.User.update(user, { where: { id, deletedAt: null } });
	};

	deleteUserPorId(id) {
		return db.User.update(
			{ deletedAt: db.sequelize.fn("NOW") },
			{ where: { id } }
		);
	}

	getUserPorId(id) {
		return db.User.findByPk(id);
	}

	async salvarUser(user) {
		const UserInstance = db.User.build(user);

		await UserInstance.save();

		return UserInstance;
	}
}

module.exports = UserRepository;
