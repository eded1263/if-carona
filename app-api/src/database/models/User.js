module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("User", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		RA: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
		},
		senha: {
			type: Sequelize.STRING,
		},
		cpf: {
			type: Sequelize.STRING,
		},
		isAdmin: Sequelize.BOOLEAN,
		fotoPerfil: Sequelize.STRING,
		deletedAt: "DATETIME",
	});

	User.associate = (models) => {
		User.hasOne(models.Carro, { foreignKey: "criadoPor", as: "carros" });
	};
	return User;
};
