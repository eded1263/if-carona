const passport = require("passport");
const UserRepository = require("../repositories/user/User.repository");

const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
function passportMiddleware() {
	const userStrategy = new JWTstrategy(
		{
			secretOrKey: process.env.JWT_SECRET,
			jwtFromRequest: (req) => {
				return req.headers.authorization.replace("Bearer ", "");
			},
		},
		async (token, done) => {
			try {
				const userRepo = new UserRepository();
				const [user] = (await userRepo.getUsers({ id: token.id })).rows;
				if (!user.isAdmin) {
					return done(false);
				}
				return done(null, token);
			} catch (error) {
				done(error);
			}
		}
	);

	passport.use("jwt", userStrategy);
	return {
		initialize: () => {
			return passport.initialize();
		},
		authenticate: () => {
			return passport.authenticate(["jwt"], { session: false });
		},
	};
}
module.exports = passportMiddleware();
