import axios from 'axios'
import cookies from 'js-cookie'
import { setAuthToken } from '~/utils/auth'

export default () => {
  axios.defaults.baseURL = process.env.APP_BASE_URL

  const token = cookies.get('Authorization')
  if (token) setAuthToken(token)
}
