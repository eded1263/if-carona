import axios from 'axios'
import cookies from 'js-cookie'
export class BaseService {
  static request(params) {
    // Problemas no login
    if (!axios.defaults.headers.Authorization && cookies.get('Authorization')) {
      axios.defaults.headers.Authorization = cookies.get('Authorization') || ''
    }
    return axios({
      ...params,
      baseURL: process.env.API_BASE_URL,
    })
  }

  static authRequest(params) {
    if (!axios.defaults.headers.Authorization && cookies.get('Authorization')) {
      axios.defaults.headers.Authorization = cookies.get('Authorization') || ''
    }
    return axios({
      ...params,
      baseURL: process.env.API_AUTH_BASE_URL,
    })
  }
}
