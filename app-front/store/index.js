import cookie from 'cookie'
import { setAuthToken } from '../utils/auth'
export default {
  actions: {
    async nuxtServerInit({ dispatch }, context) {
      const cookies = cookie.parse(context.req.headers.cookie || '')
      if ('Authorization' in cookies) {
        setAuthToken(cookies.Authorization)
      }
      return await dispatch('user/GET_CURRENT_USER')
    },
  },
}
