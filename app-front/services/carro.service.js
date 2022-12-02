import { BaseService } from './base.service'
class CarroService {
  getMeusCarros() {
    return BaseService.request({
      url: '/carro',
      method: 'GET',
    }).then((response) => response.data)
  }

  getCarro(id) {
    return BaseService.request({ url: `/carro/${id}`, method: 'GET' }).then(
      (response) => response.data
    )
  }

  postCarro(carro) {
    return BaseService.request({
      url: '/carro',
      method: 'POST',
      data: carro,
    }).then((response) => response.data)
  }

  putCarro(id, carro) {
    return BaseService.request({
      url: `/carro/${id}`,
      method: 'PUT',
      data: carro,
    }).then((response) => response.data)
  }

  deleteCarro(id) {
    return BaseService.request({
      url: `/carro/${id}`,
      method: 'DELETE',
    }).then((response) => response.data)
  }

  postImagem(id, form) {
    return BaseService.request({
      url: `/carro/${id}/imagem`,
      method: 'POST',
      data: form,
    }).then((response) => response.data)
  }
}

export const carroService = new CarroService()
