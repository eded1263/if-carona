const AlunoRepository = require("../repositories/aluno/Aluno.repository");

class AlunoService {
	constructor() {
		this.AlunoRepository = new AlunoRepository();
	}

	getProfile = async (req, res) => {
		const user = req.user;
		res.json(await this.AlunoRepository.getAlunoPorId(user.id));
	};

	getAlunos = async (req, res) => {
		res.json(await this.AlunoRepository.getAlunos());
	};

	getAlunoPorId = async (req, res) => {
		res.json(await this.AlunoRepository.getAlunoPorId(req.params.id));
	};

	putProfile = async (req, res) => {
		const user = req.user;
		res.json(await this.AlunoRepository.atualizarAluno(user.id, req.body));
	};

	putAluno = async (req, res) => {
		const aluno = {
			nome: req.body.nome,
			RA: req.body.RA,
			email: req.body.email,
			cpf: req.body.cpf,
		};
		res.json(await this.AlunoRepository.atualizarAluno(req.params.id, aluno));
	};

	deleteAluno = async (req, res) => {
		res.json(await this.AlunoRepository.deleteAlunoPorId(req.params.id));
	};
}

module.exports = new AlunoService();
