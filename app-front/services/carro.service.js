import { BaseService } from './base.service'
class CarroService {
  getMeusCarros() {
    return BaseService.request({
      url: '/api/carro',
      method: 'GET',
    }).then((response) => response.data)
  }

  getCarro(id) {
    return BaseService.request({ url: `/api/carro/${id}`, method: 'GET' }).then(
      (response) => response.data
    )
  }

  postCarro(carro) {
    return BaseService.request({
      url: '/api/carro',
      method: 'POST',
      data: carro,
    }).then((response) => response.data)
  }

  putCarro(id, carro) {
    return BaseService.request({
      url: `/api/carro/${id}`,
      method: 'PUT',
      data: carro,
    }).then((response) => response.data)
  }

  deleteCarro(id) {
    return BaseService.request({
      url: `/api/carro/${id}`,
      method: 'DELETE',
    }).then((response) => response.data)
  }
}

export const carroService = new CarroService()
