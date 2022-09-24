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
}

export const carroService = new CarroService()
