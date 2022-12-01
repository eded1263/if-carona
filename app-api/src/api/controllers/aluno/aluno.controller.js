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
			"/api/user",
			passportMiddleware.authenticate(),
			this.AlunoService.getProfile
		);
		this.router.get(
			"/api/admin/user",
			passportMiddleware.authenticate(),
			this.AlunoService.getAlunos
		);
		this.router.get(
			"/api/user/:id",
			passportMiddleware.authenticate(),
			this.AlunoService.getAlunoPorId
		);
		this.router.put(
			"/api/user",
			passportMiddleware.authenticate(),
			this.AlunoService.putProfile
		);
		this.router.put(
			"/api/admin/user/:id",
			passportMiddleware.authenticate(),
			this.AlunoService.putAluno
		);
		this.router.delete(
			"/api/admin/user/:id",
			passportMiddleware.authenticate(),
			this.AlunoService.deleteAluno
		);
	}
}

module.exports = new AlunoController();
