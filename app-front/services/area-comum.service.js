import { BaseService } from './base.service'
class AreaComumService {
  getAreasComuns() {
    return BaseService.request({
      url: '/area-comum',
      method: 'GET',
    }).then((response) => response.data)
  }

  getAreaComum(id) {
    return BaseService.request({
      url: `/area-comum/${id}`,
      method: 'GET',
    }).then((response) => response.data)
  }

  postAreaComum(areaComum) {
    return BaseService.request({
      url: '/area-comum',
      method: 'POST',
      data: areaComum,
    }).then((response) => response.data)
  }

  putAreaComum(id, areaComum) {
    return BaseService.request({
      url: `/area-comum/${id}`,
      method: 'PUT',
      data: areaComum,
    }).then((response) => response.data)
  }

  deleteAreaComum(id) {
    return BaseService.request({
      url: `/area-comum/${id}`,
      method: 'DELETE',
    }).then((response) => response.data)
  }
}

export const areaComumService = new AreaComumService()
