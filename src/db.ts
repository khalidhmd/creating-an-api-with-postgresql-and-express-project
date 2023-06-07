import dotenv from "dotenv";
dotenv.config();
import { Pool } from "pg";

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_USER_TEST,
  POSTGRES_PASSWORD,
  ENV,
  POSTGRES_DB_TEST,
} = process.env;

// let options;

console.log("ENV in db file", ENV);

// // db default settings for dev environment
// if (ENV == "dev" || ENV == "development") {
//   options = {
//     host: POSTGRES_HOST,
//     database: POSTGRES_DB,
//     user: POSTGRES_USER,
//     password: POSTGRES_PASSWORD,
//   };
// }

// // if environment set to test, change db settings accordingly
// if (ENV == "test") {
//   options = {
// host: POSTGRES_HOST,
// database: POSTGRES_DB_TEST,
// user: POSTGRES_USER,
// password: POSTGRES_PASSWORD,
//   };
// }

// const db = new Pool(options);

// console.log("options", options);
export default new Pool({
  host: POSTGRES_HOST,
  database: ENV == "test" ? POSTGRES_DB_TEST : POSTGRES_DB,
  user: ENV == "test" ? POSTGRES_USER_TEST : POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});
console.log("ENV in db file 2", ENV);

// export default db;
