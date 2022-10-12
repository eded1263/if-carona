module.exports = (sequelize, Sequelize) => {
	const Foto = sequelize.define("Foto", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nomeImagem: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		url: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		ordem: {
			type: Sequelize.INTEGER,
			defaultValue: 0,
		},
		carroId: { type: Sequelize.INTEGER, foreignKey: true },
		areaComumId: { type: Sequelize.INTEGER, foreignKey: true },
		deletedAt: "DATETIME",
	});

	Foto.associate = (models) => {
		Foto.belongsTo(models.Carro, { foreignKey: "carroId", as: "carro" });
	};
	Foto.associate = (models) => {
		Foto.belongsTo(models.AreaComum, {
			foreignKey: "areaComumId",
			as: "areaComum",
		});
	};
	return Foto;
};
