import db from "../db";

export type productType = {
  id: number;
  price: number;
  name: string;
  category: string;
};

export class ProductModel {
  async index(): Promise<productType[]> {
    try {
      const conn = await db.connect();
      const sql = "SELECT * FROM products";

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get products. Error: ${err}`);
    }
  }

  async show(id: number): Promise<productType> {
    try {
      const sql = "SELECT * FROM products WHERE id=($1)";

      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find user ${id}. Error: ${err}`);
    }
  }

  async create(p: productType): Promise<productType> {
    try {
      const sql =
        "INSERT INTO products (name, price, category) VALUES($1, $2, $3) RETURNING *";
      const conn = await db.connect();

      const result = await conn.query(sql, [p.name, p.price, p.id, p.category]);

      const book = result.rows[0];

      conn.release();

      return book;
    } catch (err) {
      throw new Error(`Could not add new user ${p.name}. Error: ${err}`);
    }
  }

  async delete(id: number): Promise<productType> {
    try {
      const sql = "DELETE FROM products WHERE id=($1)";
      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (err) {
      throw new Error(`Could not delete product ${id}. Error: ${err}`);
    }
  }
}
