import axios from 'axios'
class CarroService {
  static getMeusCarros() {
    return axios.get('/carro').then((response) => response.data)
  }
}

export default CarroService
