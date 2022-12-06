import { BaseService } from './base.service'

class UserService {
  getUsers() {
    return BaseService.request({
      url: '/admin/user',
      method: 'GET',
    }).then((response) => response.data)
  }

  getUser(id) {
    return BaseService.request({
      url: `/user/${id}`,
      method: 'GET',
    }).then((response) => response.data)
  }

  getProfile() {
    return BaseService.request({
      url: `/user`,
      method: 'GET',
    }).then((response) => response.data)
  }

  putUser(id, user) {
    return BaseService.request({
      url: `/admin/user/${id}`,
      method: 'PUT',
      data: user,
    }).then((response) => response.data)
  }

  putProfile(user) {
    return BaseService.request({
      url: `/user/`,
      method: 'PUT',
      data: user,
    }).then((response) => response.data)
  }

  login(credentials) {
    return BaseService.authRequest({
      url: `/login`,
      method: 'POST',
      data: credentials,
    }).then((response) => response.data)
  }

  postUser(user) {
    return BaseService.authRequest({
      url: `/cadastro-usuario`,
      method: 'POST',
      data: user,
    }).then((response) => response.data)
  }

  deleteUser(id) {
    return BaseService.request({
      url: `/admin/user/${id}`,
      method: 'DELETE',
    }).then((response) => response.data)
  }
}

export const userService = new UserService()
