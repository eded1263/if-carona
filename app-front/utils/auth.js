import axios from 'axios'
import Cookies from 'js-cookie'
export function setAuthToken(token) {
  axios.defaults.headers.Authorization = token
}
export function resetAuthToken() {
  delete axios.defaults.headers.Authorization
  Cookies.set('Authorization', ``, {
    expires: 7,
    httpOnly: false,
  })
}
