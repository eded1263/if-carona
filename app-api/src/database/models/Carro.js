module.exports = (sequelize, Sequelize) => {
	const Carro = sequelize.define("Carro", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		modelo: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		placa: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		cor: Sequelize.STRING,
		ano: Sequelize.INTEGER,
		criadoPor: { type: Sequelize.INTEGER, foreignKey: true },
		deletedAt: "DATETIME",
	});
	Carro.associate = (models) => {
		Carro.belongsTo(models.User, { foreignKey: "criadoPor", as: "dono" });
	};

	Carro.associate = (models) => {
		Carro.hasMany(models.Foto, { foreignKey: "carroId", as: "fotos" });
	};
	return Carro;
};
