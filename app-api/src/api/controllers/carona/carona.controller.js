const { Router } = require("express");
const CaronaService = require("../../services/Carona.service");

class CarroController {
	router;
	CaronaService;

	constructor() {
		this.router = Router();
		this.CaronaService = CaronaService;
		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get("/carona", this.CaronaService.getCaronasDisponiveis);
		this.router.post("/carona", this.CaronaService.postCarona);
		this.router.get("/carona/:id", this.CaronaService.getCarona);
		this.router.put("/carona/:id", this.CaronaService.atualizarCarona);
		this.router.post("/carona/:id/aceitar", this.CaronaService.aceitarCarona);
		this.router.post("/carona/:id/cancelar", this.CaronaService.cancelarCarona);
		this.router.delete("/carona/:id", this.CaronaService.deleteCarona);
	}
}

module.exports = new CarroController();
