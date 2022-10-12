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

	getAlunos = async (req, res) => {
		res.json(await this.AlunoRepository.getAlunos());
	};

	postAluno = async (req, res) => {
		res.json(await this.AlunoRepository.salvarAluno(req.body));
	};
}

module.exports = new AlunoService();
