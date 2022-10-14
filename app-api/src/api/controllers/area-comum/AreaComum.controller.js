const { Router } = require("express");
const AreaComumService = require("../../services/AreaComum.service");
const multer = require("multer");
const multerConfig = require("../../../config/multer");
class AreaComumController {
	router;
	AreaComumService;

	constructor() {
		this.router = Router();
		this.AreaComumService = AreaComumService;
		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get("/area-comum", this.AreaComumService.getAreasComum);
		this.router.post("/area-comum", this.AreaComumService.postAreaComum);
		this.router.get("/area-comum/:id", this.AreaComumService.getAreaComumById);
		this.router.put("/area-comum/:id", this.AreaComumService.putAreaComum);
		this.router.delete(
			"/area-comum/:id",
			this.AreaComumService.deleteAreaComum
		);
	}
}

module.exports = new AreaComumController();
