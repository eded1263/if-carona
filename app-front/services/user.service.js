import { BaseService } from './base.service'
class UserService {
  getUsers() {
    return BaseService.request({
      url: '/api/admin/user',
      method: 'GET',
    }).then((response) => response.data)
  }

  getUser(id) {
    return BaseService.request({
      url: `/api/user/${id}`,
      method: 'GET',
    }).then((response) => response.data)
  }

  getProfile() {
    return BaseService.request({
      url: `/api/user`,
      method: 'GET',
    }).then((response) => response.data)
  }

  putUser(id, user) {
    return BaseService.request({
      url: `/api/admin/user/${id}`,
      method: 'PUT',
      data: user,
    }).then((response) => response.data)
  }

  putProfile(user) {
    return BaseService.request({
      url: `/api/user/`,
      method: 'PUT',
      data: user,
    }).then((response) => response.data)
  }

  postUser(user) {
    return BaseService.request({
      url: `/api/admin/user/`,
      method: 'POST',
      data: user,
    }).then((response) => response.data)
  }

  deleteUser(id) {
    return BaseService.request({
      url: `/api/admin/user/${id}`,
      method: 'DELETE',
    }).then((response) => response.data)
  }
}

export const userService = new UserService()
