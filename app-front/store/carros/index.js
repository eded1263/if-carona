import { carroService } from '@/services/carro.service'

export const state = () => ({
  carros: [],
  total: 0,
  carro: null,
  loading: false,
  erros: null,
})

export const mutations = {
  SET_CARROS: (state, response) => {
    state.carros = response.rows
    state.total = response.count
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
    return carroService
      .getMeusCarros()
      .then((response) => {
        commit('SET_CARROS', response)
        commit('SET_LOADING', false)
      })
      .catch((error) => {
        commit('SET_ERROR', error)
      })
  },
  GET_CARRO: ({ commit }, id) => {
    commit('SET_LOADING', true)
    return carroService
      .getCarro(id)
      .then((carro) => {
        commit('SET_CARRO', carro)
        commit('SET_LOADING', false)
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  POST_CARRO: ({ commit }, carro) => {
    commit('SET_LOADING', true)
    return carroService.postCarro(carro).then((carro) => {
      commit('SET_LOADING', false)
      commit('SET_CARRO', carro)
      return carro
    })
  },
  PUT_CARRO: ({ commit }, { id, carro }) => {
    commit('SET_LOADING', true)
    return carroService.putCarro(id, carro).then((c) => {
      commit('SET_LOADING', false)
      commit('SET_CARRO', c)
      return c
    })
  },
  DELETE_CARRO: ({ commit }, { id }) => {
    commit('SET_LOADING', true)
    return carroService.deleteCarro(id).then((carro) => {
      commit('SET_LOADING', false)
      commit('SET_CARRO', carro)
      return carro
    })
  },
}
