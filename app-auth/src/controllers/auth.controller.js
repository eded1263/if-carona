const { Router } = require("express");
const UserRepository = require("../repositories/user/User.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passportMiddleware = require("../middlewares/passport.middleware");

class AuthController {
	router = Router();
	userRepo;

	constructor() {
		this.registerRoutes();
		this.userRepo = new UserRepository();
	}
	registerRoutes() {
		this.router.post("/login", this.login);
		this.router.post(
			"/cadastro-usuario",
			passportMiddleware.authenticate(),
			this.cadastrarUsuario
		);
	}
	cadastrarUsuario = async (req, res) => {
		try {
			const { senha } = req.body;
			const salt = bcrypt.genSaltSync(10);
			let novaSenha = await bcrypt.hash(senha, salt);
			const user = await this.userRepo.salvarUser({
				...req.body,
				senha: novaSenha,
				isAdmin: false,
			});
			res.json(user);
		} catch (e) {
			res.json({ message: e.message, status: 500 });
		}
	};

	login = async (req, res) => {
		const { RA, senha } = req.body;
		if (!RA || !senha)
			return res
				.status(400)
				.json({ message: "RA ou senha incorretos", status: 400 });
		const [user] = (await this.userRepo.getUsers({ RA })).rows;
		if (user) {
			const compare = true;
			// const compare = await bcrypt.compare(senha, user.senha);
			if (compare) {
				const body = { id: user.id, RA: user.RA };
				const token = jwt.sign(JSON.stringify(body), process.env.JWT_SECRET);

				return res.json({ token });
			}
			return res
				.status(400)
				.json({ message: "RA ou senha incorretos", status: 400 });
		}
		return res
			.status(400)
			.json({ message: "RA ou senha incorretos", status: 400 });
	};
}

module.exports = new AuthController();
