import { areaComumService } from '../../services/area-comum.service'

export const state = () => ({
  areasComuns: [],
  total: 0,
  areaComum: null,
  loading: false,
  error: null,
})
export const mutations = {
  SET_AREAS_COMUNS: (state, response) => {
    state.areasComuns = response.rows
    state.total = response.count
  },
  SET_AREA_COMUM: (state, area) => {
    state.areaComum = area
  },

  SET_LOADING: (state, loading) => {
    state.loading = loading
  },
  SET_ERROR: (state, error) => {
    state.error = error
    state.loading = false
  },
}

export const actions = {
  GET_AREAS_COMUNS: ({ commit }) => {
    commit('SET_LOADING', true)
    return areaComumService
      .getAreasComuns()
      .then((response) => {
        commit('SET_AREAS_COMUNS', response)
        commit('SET_LOADING', false)
        return response
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  GET_AREA_COMUM: ({ commit }, id) => {
    commit('SET_LOADING', true)
    return areaComumService
      .getAreaComum(id)
      .then((response) => {
        commit('SET_AREA_COMUM', response)
        commit('SET_LOADING', false)
        return response
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  POST_AREA_COMUM: ({ commit }, areaComum) => {
    commit('SET_LOADING', true)
    return areaComumService
      .postAreaComum(areaComum)
      .then((response) => {
        commit('SET_AREA_COMUM', response)
        commit('SET_LOADING', false)
        return response
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  PUT_AREA_COMUM: ({ commit }, { id, areaComum }) => {
    commit('SET_LOADING', true)
    return areaComumService
      .putAreaComum(id, areaComum)
      .then((response) => {
        commit('SET_LOADING', false)
        return response
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  DELETE_AREA_COMUM: ({ commit }, id) => {
    commit('SET_LOADING', true)
    return areaComumService
      .deleteAreaComum(id)
      .then((response) => {
        commit('SET_LOADING', false)
        return response
      })
      .catch((error) => commit('SET_ERROR', error))
  },
}
