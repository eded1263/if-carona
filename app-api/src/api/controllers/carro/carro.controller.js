const { Router } = require("express");
const CarroService = require("../../services/Carro.service");
const multer = require("multer");
const multerConfig = require("../../../config/multer");
class CarroController {
	router;
	CarroService;

	constructor() {
		this.router = Router();
		this.CarroService = CarroService;
		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get("/carro", this.CarroService.getMeusCarros);
		this.router.post("/carro", this.CarroService.postCarro);
		this.router.get("/carro/:id", this.CarroService.getCarroById);
		this.router.put("/carro/:id", this.CarroService.putCarro);
		this.router.delete("/carro/:id", this.CarroService.deleteCarro);
		this.router.post(
			"/carro/:id/imagem",
			multer(multerConfig).single("file"),
			this.CarroService.postImagem
		);
		this.router.put("/carro/:id/imagem", this.CarroService.putImagem);
		this.router.delete("/carro/:id/imagem", this.CarroService.deleteImagem);
	}
}

module.exports = new CarroController();
