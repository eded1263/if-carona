import CarroService from '../../services/carro.service'

export const state = () => ({
  meusCarros: [],
  carro: null,
  loading: false,
  erros: null,
})

export const mutations = {
  SET_CARROS: (state, carros) => {
    state.carros = carros
  },
  SET_CARRO: (state, carro) => {
    state.carro = carro
  },
  SET_LOADING: (state, loading) => {
    state.loading = loading
  },
  SET_ERROR: (state, error) => {
    state.error = error
  },
}

export const actions = {
  GET_CARROS: ({ commit }) => {
    commit('SET_LOADING', true)
    CarroService.getMeusCarros()
      .then((carros) => {
        commit('SET_CARROS', carros)
        commit('SET_LOADING', false)
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  GET_CARRO: ({ commit }, id) => {
    commit('SET_LOADING', true)
    CarroService.getCarroPorId(id)
      .then((carro) => {
        commit('SET_CARRO', carro)
        commit('SET_LOADING', false)
      })
      .catch((error) => commit('SET_ERROR', error))
  },
}
