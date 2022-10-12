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
		this.router.get("/admin/user", this.AlunoService.getAlunos);
		this.router.post("/admin/user", this.AlunoService.postAluno);
		this.router.get("/user/:id", this.AlunoService.getAlunoPorId);
		this.router.put("/admin/user/:id", this.AlunoService.putAluno);
		this.router.delete("/admin/user/:id", this.AlunoService.deleteAluno);
	}
}

module.exports = new AlunoController();