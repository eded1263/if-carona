const AlunoRepository = require("../repositories/aluno/Aluno.repository");

class AlunoService {
	constructor() {
		this.AlunoRepository = new AlunoRepository();
	}

	getProfile = async (req, res) => {
		const user = req.user;
		res.json(await this.AlunoRepository.getAlunoPorId(1));
		// res.json(this.AlunoRepository.getAlunoPorId(user.id))
	};
}

module.exports = new AlunoService();
