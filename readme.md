## Desafio 6 - GoStack Rocketseat

#### Como rodar

- Crie uma instância do postgres com o docker

  > docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
  > docker start gostack_postgres

- Crie o banco de dados com o nome 'gostack_desafio06'

- Rode as migrations

  > yarn typeorm migration:run

- Inicie o servidor

  > yarn dev:server

- Teste as rotas com o arquivo 'collection.json' anexado na raiz deste projeto

#### Rodando os testes

- Crie o banco de dados com o nome 'gostack_desafio06_tests'
- Rode os testes
  > yarn test
