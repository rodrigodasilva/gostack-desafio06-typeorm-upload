> docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
> docker start gostack_postgres

## Migrations

- Criar migrations
  > yarn typeorm migration:create -n CreateAppointments
- Rodar
  > yarn typeorm migration:run
- Desfazer
  > yarn typeorm migration:revert
- Mostar as migration que já executaram
  > yarn typeorm migration:show
