const { Router } = require("express");
const CarroService = require("../../services/Carro.service");
const multer = require("multer");
const multerConfig = require("../../../config/multer");
const passportMiddleware = require("../../../middlewares/passport.middleware");
class CarroController {
	router;
	CarroService;

	constructor() {
		this.router = Router();
		this.CarroService = CarroService;
		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get(
			"/carro",
			passportMiddleware.authenticate(),
			this.CarroService.getMeusCarros
		);
		this.router.post(
			"/carro",
			passportMiddleware.authenticate(),
			this.CarroService.postCarro
		);
		this.router.get(
			"/carro/:id",
			passportMiddleware.authenticate(),
			this.CarroService.getCarroById
		);
		this.router.put(
			"/carro/:id",
			passportMiddleware.authenticate(),
			this.CarroService.putCarro
		);
		this.router.delete(
			"/carro/:id",
			passportMiddleware.authenticate(),
			this.CarroService.deleteCarro
		);
		this.router.post(
			"/carro/:id/imagem",
			passportMiddleware.authenticate(),
			multer(multerConfig).single("file"),
			this.CarroService.postImagem
		);
		this.router.put(
			"/carro/:id/imagem",
			passportMiddleware.authenticate(),
			this.CarroService.putImagem
		);
		this.router.delete(
			"/carro/:id/imagem",
			passportMiddleware.authenticate(),
			this.CarroService.deleteImagem
		);
	}
}

module.exports = new CarroController();
