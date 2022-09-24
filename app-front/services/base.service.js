import axios from 'axios'
export class BaseService {
  static request(params) {
    return axios({
      ...params,
      baseURL: process.env.APP_BASE_URL,
    })
  }
}
