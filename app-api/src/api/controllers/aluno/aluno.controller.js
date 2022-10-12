const { Router } = require("express");
const AlunoService = require("../../services/Aluno.service");
const multer = require("multer");
const multerConfig = require("../../../config/multer");
class AlunoController {
	router;
	AlunoService;

	constructor() {
		this.router = Router();
		this.AlunoService = AlunoService;
		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get("/user", this.AlunoService.getProfile);
	}
}

module.exports = new AlunoController();
