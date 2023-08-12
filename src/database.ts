import { Pool } from "pg";

import dotenv from "dotenv";
dotenv.config();
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_USER_TEST,
  POSTGRES_PASSWORD,
  POSTGRES_PASSWORD_TEST,
  ENV,
  POSTGRES_DB_TEST,
} = process.env;

let options;

// // if environment set to test, change db settings accordingly
if (ENV == "test") {
  options = {
    host: POSTGRES_HOST,
    database: POSTGRES_DB_TEST,
    user: POSTGRES_USER_TEST,
    password: POSTGRES_PASSWORD_TEST,
  };
} else {
  // default db settings
  options = {
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  };
}

export default new Pool(options);
