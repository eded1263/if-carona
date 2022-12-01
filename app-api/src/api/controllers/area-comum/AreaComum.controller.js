const { Router } = require("express");
const AreaComumService = require("../../services/AreaComum.service");
const multer = require("multer");
const multerConfig = require("../../../config/multer");
const passportMiddleware = require("../../../middlewares/passport.middleware");
class AreaComumController {
	router;
	AreaComumService;

	constructor() {
		this.router = Router();
		this.AreaComumService = AreaComumService;
		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get(
			"/area-comum",
			passportMiddleware.authenticate(),
			this.AreaComumService.getAreasComum
		);
		this.router.post(
			"/area-comum",
			passportMiddleware.authenticate(),
			this.AreaComumService.postAreaComum
		);
		this.router.get(
			"/area-comum/:id",
			passportMiddleware.authenticate(),
			this.AreaComumService.getAreaComumById
		);
		this.router.put(
			"/area-comum/:id",
			passportMiddleware.authenticate(),
			this.AreaComumService.putAreaComum
		);
		this.router.delete(
			"/area-comum/:id",
			passportMiddleware.authenticate(),
			this.AreaComumService.deleteAreaComum
		);
	}
}

module.exports = new AreaComumController();
