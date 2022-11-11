Para subir o banco de dados de teste, basta usar o comando: 
- ```docker-compose -f docker-compose.test.yml up --build -d```
  
Feito isso, basta rodar o comando ```yarn test``` para testar a aplicação

### Para pasar o banco de testes
```docker-compose -f docker-compose.test.yml down```