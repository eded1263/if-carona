const { Router } = require("express");
const AlunoService = require("../../services/Aluno.service");
const multer = require("multer");
const multerConfig = require("../../../config/multer");
const passportMiddleware = require("../../../middlewares/passport.middleware");
class AlunoController {
	router;
	AlunoService;

	constructor() {
		this.router = Router();
		this.AlunoService = AlunoService;
		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get(
			"/user",
			passportMiddleware.authenticate(),
			this.AlunoService.getProfile
		);
		this.router.get(
			"/admin/user",
			passportMiddleware.authenticate(),
			this.AlunoService.getAlunos
		);
		this.router.get(
			"/user/:id",
			passportMiddleware.authenticate(),
			this.AlunoService.getAlunoPorId
		);
		this.router.put(
			"/user",
			passportMiddleware.authenticate(),
			this.AlunoService.putProfile
		);
		this.router.put(
			"/admin/user/:id",
			passportMiddleware.authenticate(),
			this.AlunoService.putAluno
		);
		this.router.delete(
			"/admin/user/:id",
			passportMiddleware.authenticate(),
			this.AlunoService.deleteAluno
		);
	}
}

module.exports = new AlunoController();
