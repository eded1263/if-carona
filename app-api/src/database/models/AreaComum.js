module.exports = (sequelize, Sequelize) => {
	const AreaComum = sequelize.define("AreaComum", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		latitude: Sequelize.STRING,
		longitude: Sequelize.STRING,
		nome: Sequelize.STRING,
		criadoPor: { type: Sequelize.INTEGER, foreignKey: true },
		deletedAt: "DATETIME",
	});

	AreaComum.associate = (models) => {
		AreaComum.belongsTo(models.User, {
			foreignKey: "criadoPor",
			as: "criador",
		});
	};
	AreaComum.associate = (models) => {
		AreaComum.hasMany(models.Foto, { foreignKey: "areaComumId", as: "fotos" });
	};
	return AreaComum;
};
