import { userService } from '@/services/user.service'

export const state = () => ({
  users: [],
  total: 0,
  user: null,
  currentUser: null,
  loading: false,
  erros: null,
})

export const mutations = {
  SET_USERS: (state, response) => {
    state.users = response.rows
    state.total = response.count
  },
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_CURRENT_USER: (state, user) => {
    state.currentUser = user
  },
  SET_LOADING: (state, loading) => {
    state.loading = loading
  },
  SET_ERROR: (state, error) => {
    state.error = error
  },
}

export const actions = {
  GET_USERS: ({ commit }) => {
    commit('SET_LOADING', true)
    return userService
      .getMeusCarros()
      .then((response) => {
        commit('SET_CARROS', response)
        commit('SET_LOADING', false)
      })
      .catch((error) => {
        commit('SET_ERROR', error)
      })
  },
  GET_USER: ({ commit }, id) => {
    commit('SET_LOADING', true)
    return userService
      .getUser(id)
      .then((user) => {
        commit('SET_USER', user)
        commit('SET_LOADING', false)
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  GET_CURRENT_USER: ({ commit }, id) => {
    commit('SET_LOADING', true)
    return userService
      .getProfile(id)
      .then((user) => {
        commit('SET_CURRENT_USER', user)
        commit('SET_LOADING', false)
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  POST_USER: ({ commit }, { id, user }) => {
    commit('SET_LOADING', true)
    return userService
      .postUser(id, user)
      .then((newUser) => {
        commit('SET_LOADING', false)
        return newUser
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  PUT_USER: ({ commit }, { id, user }) => {
    commit('SET_LOADING', true)
    return userService
      .putUser(id, user)
      .then((newUser) => {
        commit('SET_LOADING', false)
        return newUser
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  PUT_PROFILE: ({ commit }, { id, user }) => {
    commit('SET_LOADING', true)
    return userService
      .putProfile(id, user)
      .then((newUser) => {
        commit('SET_LOADING', false)
        return newUser
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  DELETE_USER: ({ commit }, id) => {
    commit('SET_LOADING', true)
    return userService
      .deleteProfile(id)
      .then((user) => {
        commit('SET_LOADING', false)
        return user
      })
      .catch((error) => commit('SET_ERROR', error))
  },
}
