export default {
  actions: {
    async nuxtServerInit({ dispatch }) {
      return await dispatch('user/GET_CURRENT_USER')
    },
  },
}
