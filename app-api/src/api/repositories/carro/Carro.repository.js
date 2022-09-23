class CarroRepository {
	_mocks;

	constructor() {
		this._mocks = {
			meusCarros: [],
		};
	}

	getCarrosDoUsuario(user) {
		return { carros: meusCarros, total: meusCarros.length };
	}

	atualizarCarro(id, carro) {
		const index = this._mocks.meusCarros.findIndex((c) => c.id == id);

		if (index > 0) {
			this._mocks.meusCarros[index] = {
				...this._mocks.meusCarros[index],
				...carro,
			};
			return this._mocks.meusCarros[index];
		}
		return null;
	}

	deleteCarroPorId(id) {
		const index = this._mocks.meusCarros.findIndex((c) => c.id == id);

		if (index >= 0) {
			const carro = this._mocks.meusCarros[index];
			this._mocks.meusCarros.splice(index);
			return carro;
		}
		return null;
	}

	getCarroPorId(id) {
		const index = this._mocks.meusCarros.findIndex((c) => c.id == id);

		if (index >= 0) {
			return this._mocks.meusCarros[index];
		}
		return null;
	}

	salvarCarro(carro) {
		const newCarro = {
			...carro,
			id: this._mocks.meusCarros.length,
		};
		this._mocks.meusCarros.push(newCarro);

		return newCarro;
	}
}

module.exports = CarroRepository;
