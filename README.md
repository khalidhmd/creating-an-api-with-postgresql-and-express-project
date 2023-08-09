# Storefront Backend Project

## Database setup and connection

To use this project to connect to your Postgres databse server and run successfully you need to provide the following environment variable and set your system values instead of provided values:

```
POSTGRES_HOST=<Postgres server ddress>
POSTGRES_DB=<database name>
POSTGRES_DB_TEST=<database name for runing Jasmine tests>
POSTGRES_USER=<database user name>
POSTGRES_USER_TEST=<database username for testing>
POSTGRES_PASSWORD=<password for database user>
POSTGRES_PASSWORD_TEST=<password for testing user>
API_PORT=<port for express api server>
```

The Postgres server will use the default port

The api server port is set in the env variable API_PORT as above, or fail safe to 3000 as set in the server file script

## To use this project:

- To install the packages run `npm install`
- add `.env` file to the projet root directory that contains the above list of variables.
- install Postgresql database server
- create a database and put the database name in the `.env` file
- You will need to install globally `jasmine-ts` and `db-migrate`
- run `db-migrate up`
- run any script from `package.json` file

### Note that the `test` script in the `package.json` is writen to run on `Ubuntu (linux)` OS. Please update it to set environment variable accoriding to your system OS.

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API.

Your first task is to read the requirements and update the document with the following:

- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.  
  **Example**: A SHOW route: 'blogs/:id' [GET]

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.  
  **Example**: You can format this however you like but these types of information should be provided
  Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled.

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database.

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!
