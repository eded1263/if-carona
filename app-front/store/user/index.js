import Cookies from 'js-cookie'
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
    state.loading = false
  },
}

export const actions = {
  GET_USERS: ({ commit }) => {
    commit('SET_LOADING', true)
    return userService
      .getUsers()
      .then((response) => {
        commit('SET_USERS', response)
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
  GET_CURRENT_USER: ({ commit }) => {
    commit('SET_LOADING', true)
    return userService
      .getProfile()
      .then((user) => {
        commit('SET_CURRENT_USER', user)
        commit('SET_LOADING', false)
      })
      .catch((error) => {
        commit('SET_ERROR', error)
      })
  },
  POST_USER: ({ commit }, user) => {
    commit('SET_LOADING', true)
    return userService
      .postUser(user)
      .then((newUser) => {
        commit('SET_LOADING', false)
        return newUser
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  POST_LOGIN: ({ commit, dispatch }, credentials) => {
    commit('SET_LOADING', true)
    return userService.login(credentials).then(({ token }) => {
      commit('SET_LOADING', false)
      Cookies.set('Authorization', `Bearer ${token}`, {
        expires: 7,
        httpOnly: false,
      })
      return dispatch('GET_CURRENT_USER')
    })
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
  PUT_PROFILE: ({ commit, dispatch }, { user }) => {
    commit('SET_LOADING', true)
    return userService
      .putProfile(user)
      .then(([newUser]) => {
        commit('SET_LOADING', false)
        dispatch('GET_CURRENT_USER', newUser)
        return newUser
      })
      .catch((error) => commit('SET_ERROR', error))
  },
  DELETE_USER: ({ commit }, { id }) => {
    commit('SET_LOADING', true)
    return userService
      .deleteUser(id)
      .then((user) => {
        commit('SET_LOADING', false)
        return user
      })
      .catch((error) => commit('SET_ERROR', error))
  },
}
