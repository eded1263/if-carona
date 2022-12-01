const { Router } = require("express");
const CaronaService = require("../../services/Carona.service");
const passportMiddleware = require("../../../middlewares/passport.middleware");
class CarroController {
	router;
	CaronaService;

	constructor() {
		this.router = Router();
		this.CaronaService = CaronaService;
		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get(
			"/carona",
			passportMiddleware.authenticate(),
			this.CaronaService.getCaronasDisponiveis
		);
		this.router.post(
			"/carona",
			passportMiddleware.authenticate(),
			this.CaronaService.postCarona
		);
		this.router.get(
			"/carona/:id",
			passportMiddleware.authenticate(),
			this.CaronaService.getCarona
		);
		this.router.put(
			"/carona/:id",
			passportMiddleware.authenticate(),
			this.CaronaService.atualizarCarona
		);
		this.router.post(
			"/carona/:id/aceitar",
			passportMiddleware.authenticate(),
			this.CaronaService.aceitarCarona
		);
		this.router.post(
			"/carona/:id/cancelar",
			passportMiddleware.authenticate(),
			this.CaronaService.cancelarCarona
		);
		this.router.delete(
			"/carona/:id",
			passportMiddleware.authenticate(),
			this.CaronaService.deleteCarona
		);
	}
}

module.exports = new CarroController();
