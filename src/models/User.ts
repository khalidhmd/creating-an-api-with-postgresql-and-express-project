import db from "../database";
export type userType = {
  id?: number;
  first_name: string;
  last_name: string;
  password: string;
  email: string;
};

export class UserModel {
  static async index(): Promise<userType[]> {
    try {
      const conn = await db.connect();
      const sql = "SELECT * FROM users;";

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }

  static async show(id: number): Promise<userType> {
    try {
      const sql = "SELECT * FROM users WHERE id=($1);";

      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find user ${id}. Error: ${err}`);
    }
  }

  static async create(u: userType): Promise<userType> {
    try {
      const sql =
        "INSERT INTO users (first_name, last_name, password, email) VALUES($1, $2, $3, $4) RETURNING *;";
      const conn = await db.connect();

      const result = await conn.query(sql, [
        u.first_name,
        u.last_name,
        u.password,
        u.email,
      ]);

      const book = result.rows[0];

      conn.release();

      return book;
    } catch (err) {
      throw new Error(`Could not add new user ${u.email}. Error: ${err}`);
    }
  }

  async delete(email: string): Promise<userType> {
    try {
      const sql = "DELETE FROM users WHERE email=($1);";
      const conn = await db.connect();

      const result = await conn.query(sql, [email]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (err) {
      throw new Error(`Could not delete user ${email}. Error: ${err}`);
    }
  }

  async clear(): Promise<void> {
    try {
      const sql = "DELETE FROM users;";
      const conn = await db.connect();

      await conn.query(sql);

      conn.release();
    } catch (err) {
      throw new Error(`Could not clear user . Error: ${err}`);
    }
  }
}
