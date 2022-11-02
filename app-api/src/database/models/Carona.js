module.exports = (sequelize, Sequelize) => {
	const Carona = sequelize.define("Carona", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		alunoCarona: { type: Sequelize.INTEGER, foreignKey: true },
		areaComum: { type: Sequelize.INTEGER, foreignKey: true },
		carro: { type: Sequelize.INTEGER, foreignKey: true },
		criadoPor: { type: Sequelize.INTEGER, foreignKey: true },
		aceitadoPor: { type: Sequelize.INTEGER, foreignKey: true },
		canceladoPor: { type: Sequelize.INTEGER, foreignKey: true },
		dataOferecida: "DATETIME",
		dataAceitada: "DATETIME",
		dataCancelada: "DATETIME",
		dataCriada: { type: "DATETIME", defaultValue: Sequelize.NOW },
		deletedAt: "DATETIME",
	});
	Carona.associate = (models) => {
		Carona.belongsTo(models.User, {
			foreignKey: "criadoPor",
			as: "criadoPeloAluno",
		});
	};
	Carona.associate = (models) => {
		Carona.belongsTo(models.User, {
			foreignKey: "canceladoPor",
			as: "canceladoPeloAluno",
		});
	};
	Carona.associate = (models) => {
		Carona.belongsTo(models.User, {
			foreignKey: "aceitadoPor",
			as: "aceitadoPeloAluno",
		});
	};
	Carona.associate = (models) => {
		Carona.belongsTo(models.User, {
			foreignKey: "alunoCarona",
			as: "solicitadorDaCarona",
		});
	};
	Carona.associate = (models) => {
		Carona.belongsTo(models.Carro, {
			foreignKey: "carro",
			as: "carroDaCarona",
		});
	};
	Carona.associate = (models) => {
		Carona.belongsTo(models.AreaComum, {
			foreignKey: "areaComum",
			as: "localDaCarona",
		});
	};
	return Carona;
};
