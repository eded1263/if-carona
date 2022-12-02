const db = require("../../../database/models");

class FotoRepository {
	async adicionarImagem(imagem) {
		const fotoInstance = db.Foto.build(imagem);

		try {
			await fotoInstance.save();
		} catch (e) {
			console.log(e);
		}

		return fotoInstance;
	}

	async deletarImagens(where) {
		return db.Foto.destroy({ where, force: true });
	}
}

module.exports = FotoRepository;
