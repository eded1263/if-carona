const passport = require("passport");
const UserRepository = require("../api/repositories/aluno/Aluno.repository");

const JWTstrategy = require("passport-jwt").Strategy;
function passportMiddleware() {
	const userStrategy = new JWTstrategy(
		{
			secretOrKey: process.env.JWT_SECRET,
			jwtFromRequest: (req) => {
				return req.headers.authorization?.replace("Bearer ", "");
			},
		},
		async (token, done) => {
			try {
				const userRepo = new UserRepository();
				const user = await userRepo.getAlunoPorId(token.id);
				if (!user) {
					return done(false);
				}
				return done(null, token);
			} catch (error) {
				done(error);
			}
		}
	);
	const adminStrategy = new JWTstrategy(
		{
			secretOrKey: process.env.JWT_SECRET,
			jwtFromRequest: (req) => {
				return req.headers.authorization?.replace("Bearer ", "");
			},
		},
		async (token, done) => {
			try {
				const userRepo = new UserRepository();
				const user = await userRepo.getAlunoPorId(token.id);
				if (!user?.isAdmin) {
					return done(false);
				}
				return done(null, token);
			} catch (error) {
				done(error);
			}
		}
	);

	passport.use("jwt", userStrategy);
	passport.use("adminStrategy", adminStrategy);
	return {
		initialize: () => {
			return passport.initialize();
		},
		authenticate: () => {
			if (process.env.NODE_ENV == "test") {
				return (req, res, next) => {
					req.user = { id: 1 };
					next();
				};
			}
			return passport.authenticate(["jwt"], { session: false });
		},
		authenticateOnlyAdmin: () => {
			if (process.env.NODE_ENV == "test") {
				return (req, res, next) => {
					req.user = { id: 1 };
					next();
				};
			}
			return passport.authenticate(["adminStrategy"], { session: false });
		},
	};
}
module.exports = passportMiddleware();
