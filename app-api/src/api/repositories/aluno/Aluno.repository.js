const db = require("../../../database/models");

class AlunoRepository {
	getAlunos = () => {
		return db.User.findAndCountAll({
			where: { deletedAt: null },
		});
	};

	atualizarAluno = (id, aluno) => {
		return db.User.update(aluno, { where: { id, deletedAt: null } });
	};

	deleteAlunoPorId(id) {
		return db.User.update(
			{ deletedAt: db.sequelize.fn("NOW") },
			{ where: { id } }
		);
	}

	getAlunoPorId(id) {
		return db.User.findByPk(id);
	}

	async salvarAluno(aluno) {
		const alunoInstance = db.User.build(aluno);

		await alunoInstance.save();

		return alunoInstance;
	}
}

module.exports = AlunoRepository;
