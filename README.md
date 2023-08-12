# Storefront Backend Project

## Project setup and connection

To use this project & to connect to your Postgres databse server and run successfully you need to provide the following environment variable and set your system in .env file values instead of provided values:

```
POSTGRES_HOST=<Postgres server ddress>
POSTGRES_DB=<database name>
POSTGRES_DB_TEST=<database name for runing Jasmine tests>
POSTGRES_USER=<database user name>
POSTGRES_USER_TEST=<database username for testing>
POSTGRES_PASSWORD=<password for database user>
POSTGRES_PASSWORD_TEST=<password for testing user>
API_PORT=<port for express api server>
ENV=dev
SALT_ROUNDS=<number>
BRYPT_PASSWORD=<password text>
TOKEN_SECRET=<secret text>
```

The Postgres server will use the default port

The api server port is set in the env variable API_PORT as above, or fail safe to 3000 as set in the server file script

## To use this project:

- To install the packages run `npm install`
- add `.env` file to the projet root directory that contains the above list of variables.
- install Postgresql database server.
- create a database and put the database name in the `.env` file as decribed above.
- You will need to install globally `jasmine-ts`, `typescript`, and `db-migrate`.
- run `db-migrate up`
  - run any script from `package.json` file
  - `npm run watch` to run the project with hot reload feature.
  - `npm run start` to run the transpiled js in dist folder.
  - `npm run test` to run the test suites.
  - `npm tsc` to transplile the project to js in dist folder.

### Note that the `test` script in the `package.json` is writen to run on `Ubuntu (linux)` OS. Please update it to set environment variable accoriding to your system OS.
