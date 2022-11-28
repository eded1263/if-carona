const UserRepository = require("../repositories/user/User.repository");

const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

module.exports = new JWTstrategy(
	{
		secretOrKey: process.env.JWT_SECRET,
		jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken,
	},
	async (token, done) => {
		try {
			const userRepo = new UserRepository();
			const [user] = (await userRepo.getUsers({ id: user.id })).rows;
			if (!user.isAdmin) {
				return done(false);
			}
			return done(null, token.user);
		} catch (error) {
			done(error);
		}
	}
);
