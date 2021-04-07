# backend-nodejs-test

Este projeto é para aprender a como utilizar o Node js, typescript, docker e postgresql. Entender como funciona as migrations utilizando o typeorm e a criação de tabelas e colunas.

Ao clonar este repositório, use o comando:

yarn install

Este comando vai instalar todas as dependências necessárias para rodar o projeto.

O banco de dados é configurado via Docker. Seguir os comandos da documentação original: https://hub.docker.com/_/postgres

O arquivo ormconfig.json está as configurações do typeorm para acessar o banco de dados(caso você suba um banco com configurações diferentes basta reconfigurar):
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "teste",
  "entities": [
    "./src/models/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}

Para ver rodar o servidor node utilize o comando:

yarn dev:server

Vá para o navegador e digite localhost:3333

