## Api Ven trocar 

criando uma api para estudos 
<!-- #  Front end da Arplicaçao 
See [Repositorio front end](https://github.com). -->


## Instale as dependencias
```bash
yarn
npm install nodemon -D
```
## inicie o banco de dados 
```bash
npx knex migrate:latest
```
# crie um arquivo auth.json na pasta src/config comforme o exemplo que esta na pasta 

### inicie o funcionamento da API
```bash
npm rum dev
```
### utilizaçao da API  api com Insominia 

### baixe o sorfitware Insominia para verificar o funcionamento da API 
See [insomnia](https://insomnia.rest/)

#### rotas para utilizaçao no  texte no Insominia 

metod post http://localhost:3001/user para criar um usuario enviando dados em Json 
```bash
{
  "name": "Higor Matheus",
  "telephone": "11 0000- 0000",
  "email": "exemple@email.com",
  "password": "123456",
  "confirma_password": "123456"
}
```
metod post http://localhost:3001/login para authenticar um usuario enviando dados em Json
```bash
{
  "email": "exemple@email.com",
  "password": "123456"
}
```

<!-- ### Repositorio font end -->
<!-- See [Repositorio front end](https://github.com/Goncalves-Rafael/megahack3_grupo13_front). -->

